<template>
  <div v-if="toc.links && toc.links.length > 0" class="sticky top-0 p-4 transform-translate-x-100%">
    <h3 class="text-lg font-medium mb-3">{{ toc.title || $t('article.directory') }}</h3>
    <div class="toc-tree">
      <ul class="space-y-2">
        <li v-for="link in toc.links" :key="link.id" class="toc-item">
          <a 
            :href="`#${link.id}`" 
            class="block py-1 transition hover:text-primary text-sm"
            :class="[
              link.depth === 2 ? 'font-medium' : 'pl-3 text-gray-600',
              activeHeading === link.id ? 'text-blue-500 font-medium' : ''
            ]"
            @click.prevent="scrollToHeading(link.id)"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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

const activeHeading = ref('')

// 滚动到指定标题
const scrollToHeading = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const topPos = el.getBoundingClientRect().top + window.pageYOffset - props.offset
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    })
  }
}

// 监听滚动事件，更新活动标题
const onScroll = () => {
  for (let i = props.toc.links.length - 1; i >= 0; i--) {
    const id = props.toc.links[i].id
    const element = document.getElementById(id)
    
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= props.offset + 20) {
        activeHeading.value = id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll() // 初始化当前活动标题
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.toc-tree {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}
</style> 