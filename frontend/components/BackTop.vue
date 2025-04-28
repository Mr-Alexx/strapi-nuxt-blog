<template>
  <client-only>
    <Transition name="fade">
      <div 
        v-show="visible" 
        class="fixed bottom-6 right-6 z-50 bg-primary-100 hover:bg-primary-50 rounded-50% shadow-md cursor-pointer transition-all duration-300 w-10 h-10 lh-10 text-center text-2xl text-white"
        @click="scrollToTop"
        aria-label="回到顶部"
      >
      <span>↑</span>
      </div>
    </Transition>
  </client-only>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 显示阈值，默认200px
const props = defineProps({
  visibilityHeight: {
    type: Number,
    default: 200
  },
  // 滚动持续时间（毫秒）
  duration: {
    type: Number,
    default: 300
  }
})

// 是否显示按钮
const visible = ref(false)

// 监听滚动事件，更新按钮显示状态
const handleScroll = () => {
  visible.value = window.scrollY > props.visibilityHeight
}

// 滚动到顶部
const scrollToTop = () => {
  const startPosition = window.scrollY
  const startTime = performance.now()
  
  // 使用动画滚动到顶部
  const animateScroll = (currentTime) => {
    const elapsedTime = currentTime - startTime
    
    if (elapsedTime < props.duration) {
      // 使用缓动函数计算滚动位置
      const position = easeInOutCubic(elapsedTime, startPosition, -startPosition, props.duration)
      window.scrollTo(0, position)
      requestAnimationFrame(animateScroll)
    } else {
      window.scrollTo(0, 0)
    }
  }
  
  // 缓动函数，使滚动更加平滑
  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t * t + b
    t -= 2
    return c / 2 * (t * t * t + 2) + b
  }
  
  requestAnimationFrame(animateScroll)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查一次
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
