<template>
  <nav v-if="toc.links && toc.links.length > 0" class="sticky top-4 bg-white rounded-xl w-full">
    <div class="text-lg font-medium p-4 flex justify-between">
      <b>{{ $t('article.directory') }}</b>
      <span class="text-gray-500 text-13px cursor-pointer flex gap-1 items-center" @click="isCollapse = !isCollapse">
        {{$t(isCollapse ? 'article.toc.expand' : 'article.toc.collapse')}}
        <i :class="isCollapse ? 'arrow-down' : 'arrow-up'"></i>
      </span>
    </div>
    <div ref="tocContainer" class="max-h-400px px-4 p-block-2 border-t-1px border-t-solid border-t-gray-200 transition-all scrollbar-custom" :class="isCollapse ? 'h-0 overflow-hidden pt-0 border-t-transparent' : 'h-350px overflow-y-auto'">
      <ul class="py-4 space-y-2">
        <li v-for="link in flatToc" :key="link.id" class="toc-item" :class="[{'is-actived': activeHeading === link.id}]" :style="{'padding-left': `${link.depth - 2}em`}" :id="`toc-${link.id}`">
          <a 
            :href="`#${link.id}`" 
            class="block py-1 transition hover:text-primary text-sm"
            :class="{'text-gray-600': link.depth === 4}"
            @click="scrollToHeading(link.id)"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

const route = useRoute()
const tocContainer = ref(null)

function flattenTreeIterative(tree) {
  const result = [];
  const stack = [...tree]; // 初始栈

  while (stack.length) {
    const node = stack.shift(); // 取出一个节点
    result.push(node); // 添加到结果
    if (node.children?.length) {
      stack.unshift(...node.children.map(child => ({ ...child, parentId: node.id }))); // 子节点入栈
    }
  }
  // 移除 children 属性（可选）
  // h4之后的节点不显示
  return result.map(({ children, ...rest }) => rest).filter(item => item.depth <= 4);
}

// 定义组件接收的属性
const props = defineProps({
  toc: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      searchDepth: 2,
      depth: 2,
      links: []
    })
  },
  offset: {
    type: Number,
    default: 100
  }
})

// 扁平化toc数据
const flatToc = computed(() => {
  return flattenTreeIterative(props.toc.links)
})
const activeHeading = ref('')
const isCollapse = ref(false)

// 滚动到指定标题
const scrollToHeading = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const topPos = el.getBoundingClientRect().top + window.scrollY - props.offset
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    })
  }
}

// 滚动目录到活跃项
const scrollTocToActiveItem = () => {
  if (!activeHeading.value || isCollapse.value || !tocContainer.value) return
  
  // 获取目录中的活跃项元素
  const activeItem = document.getElementById(`toc-${activeHeading.value}`)
  if (activeItem) {
    // 计算滚动位置：活跃项的相对位置减去容器高度的一半（使活跃项居中）
    const containerHeight = tocContainer.value.clientHeight
    const activeItemTop = activeItem.offsetTop
    const scrollTo = activeItemTop - (containerHeight / 2) + (activeItem.clientHeight / 2)
    
    // 平滑滚动到计算位置
    tocContainer.value.scrollTo({
      top: Math.max(0, scrollTo),
      behavior: 'smooth'
    })
  }
}

// 监听滚动事件，更新活动标题
const onScroll = () => {
  const allHeadings = flatToc.value
  if (allHeadings.length === 0) return

  // 1. 收集所有可见标题的信息
  const visibleHeadings = []
  
  for (const heading of allHeadings) {
    const element = document.getElementById(heading.id)
    if (!element) continue
    
    const rect = element.getBoundingClientRect()
    // 计算标题顶部到视口顶部的距离 (考虑 offset)
    const topOffset = rect.top - props.offset
    
    // 保存标题信息，包括位置和ID
    visibleHeadings.push({
      id: heading.id,
      topOffset,
      // 是否在视口内
      visible: topOffset < window.innerHeight && topOffset > -rect.height,
      // 是否在视口顶部以上
      aboveViewport: topOffset <= 0,
      element,
      rect
    })
  }
  
  if (visibleHeadings.length === 0) return
  
  // 2. 确定应该激活的标题

  // 检查是否滚动到页面底部
  const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 80
  
  // 如果滚动到底部，激活最后一个标题
  if (isNearBottom) {
    activeHeading.value = allHeadings[allHeadings.length - 1].id
    return
  }
  
  // 找到位于视口顶部最近的标题
  // 方法：找到所有在视口顶部之上或接近顶部的标题中，最靠近顶部的一个
  const headingsAboveViewport = visibleHeadings.filter(h => h.aboveViewport)
  
  if (headingsAboveViewport.length > 0) {
    // 找出最接近视口顶部的标题（topOffset最大的负值）
    const closestHeading = headingsAboveViewport.reduce((prev, current) => 
      (prev.topOffset > current.topOffset) ? prev : current
    )
    activeHeading.value = closestHeading.id
    return
  }
  
  // 如果没有标题在视口顶部之上，则激活第一个可见的标题
  const firstVisibleHeading = visibleHeadings.find(h => h.visible)
  if (firstVisibleHeading) {
    activeHeading.value = firstVisibleHeading.id
    return
  }
  
  // 默认情况：激活第一个标题
  activeHeading.value = allHeadings[0].id
}

// 监听 activeHeading 变化，滚动目录到活跃项
watch(activeHeading, () => {
  // 使用 nextTick 确保 DOM 已更新
  nextTick(() => {
    scrollTocToActiveItem()
  })
})

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  
  // 如果URL中有hash，滚动到对应位置并激活对应标题
  if (route.hash) {
    const hashId = route.hash.slice(1)
    scrollToHeading(hashId)
    activeHeading.value = hashId
  } else {
    // 初始化时没有hash，手动触发一次scroll事件来更新活动标题
    onScroll()
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.arrow-up,
.arrow-down {
  width: 6px;
  height: 6px;
  border: 1px solid #ccc;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-radius: 2px;
}

.arrow-up {
  transform: rotateZ(45deg);
}

.arrow-down {
  transform: rotateZ(-135deg);
}

.toc-item {
  position: relative;
  list-style:none;
}
.toc-item:after {
  content: '';
  position: absolute;
  right: -16px;
  top: 50%;
  width: 3px;
  height: 1em;
  margin-top: -0.5em;
  background-color: var(--color-primary);
  opacity: 0;
  z-index: 1;
  border-radius: 2px;
}
.toc-item.is-actived {
  color: var(--color-primary);
}
.toc-item.is-actived:after {
  opacity: 1;
}
</style> 