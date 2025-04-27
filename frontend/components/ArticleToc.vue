<template>
  <div v-if="headings.length > 0" class="sticky top-24 p-4 bg-white rounded-lg shadow-sm">
    <h3 class="text-lg font-medium mb-3">{{ $t('article.tableOfContents') }}</h3>
    <div class="toc-tree">
      <ul class="space-y-2">
        <li v-for="(heading, index) in headings" :key="index" class="toc-item">
          <a 
            :href="`#${heading.id}`" 
            class="block py-1 transition hover:text-primary text-sm"
            :class="[
              heading.level === 2 ? 'font-medium' : 'pl-3 text-gray-600',
              activeHeading === heading.id ? 'text-primary font-medium' : ''
            ]"
            @click.prevent="scrollToHeading(heading.id)"
          >
            {{ heading.text }}
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
  selector: {
    type: String,
    default: '.article-content h2, .article-content h3'
  },
  offset: {
    type: Number,
    default: 100
  }
})

const headings = ref([])
const activeHeading = ref('')

// 提取页面中的标题
const extractHeadings = () => {
  const elements = document.querySelectorAll(props.selector)
  const extractedHeadings = []

  elements.forEach((el) => {
    // 确保每个标题都有一个 id
    if (!el.id) {
      el.id = el.textContent.trim().toLowerCase().replace(/\s+/g, '-')
    }

    extractedHeadings.push({
      id: el.id,
      text: el.textContent,
      level: parseInt(el.tagName.substring(1), 10)
    })
  })

  headings.value = extractedHeadings
}

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
  for (let i = headings.value.length - 1; i >= 0; i--) {
    const id = headings.value[i].id
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
  // 组件挂载后，给页面内容一些时间渲染，然后提取标题
  setTimeout(() => {
    extractHeadings()
    window.addEventListener('scroll', onScroll)
    onScroll() // 初始化当前活动标题
  }, 300)
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