<template>
  <div class="load-more-container">
    <!-- 插槽内容：显示列表项 -->
    <slot></slot>
    
    <!-- 观察元素：当这个元素进入视口时触发加载 -->
    <div ref="observerTarget" class="observer-target" v-show="hasMore">
      <!-- 加载中状态 -->
      <div v-if="loading" class="loading-wrapper">
        <div class="loading-spinner" :class="[`theme-${theme}`, `size-${size}`]"></div>
        <span class="loading-text">{{ $t('loadMore.loading') }}</span>
      </div>
      
      <!-- 手动加载按钮（可选） -->
      <button 
        v-else-if="manualLoad" 
        @click="$emit('load-more')" 
        class="load-more-btn"
        :class="[`theme-${theme}`, `size-${size}`]"
      >
        {{ $t('loadMore.loadMore') }}
      </button>
    </div>
    
    <!-- 全部加载完毕 -->
    <div v-if="!hasMore && !loading" class="no-more">
      {{ $t('loadMore.noMore') }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const { t } = useI18n()

// 组件属性
const props = defineProps({
  // 是否还有更多数据
  hasMore: {
    type: Boolean,
    default: true
  },
  // 是否正在加载
  loading: {
    type: Boolean,
    default: false
  },
  // 是否使用手动加载按钮，而不是自动检测滚动
  manualLoad: {
    type: Boolean,
    default: false
  },
  // 加载中文本
  loadingText: {
    type: String
  },
  // 加载更多按钮文本
  loadMoreText: {
    type: String,
  },
  // 无更多数据文本
  noMoreText: {
    type: String,
  },
  // 触发加载的阈值（与可见区域的交叉比例）
  threshold: {
    type: Number,
    default: 0.1
  },
  // 数据总数
  totalItems: {
    type: Number,
    default: 0
  },
  // 是否禁用自动加载
  disabled: {
    type: Boolean,
    default: false
  },
  // 颜色主题：primary, success, info, warning, danger
  theme: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'info', 'warning', 'danger'].includes(value)
  },
  // 加载动画大小
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})

// 定义事件
const emit = defineEmits(['load-more'])

// 观察目标元素的引用
const observerTarget = ref(null)
// 记录观察者实例
let observer = null

// 设置交叉观察器
const setupObserver = () => {
  // 如果已有观察者，先断开连接
  if (observer) {
    observer.disconnect()
  }
  
  // 创建新的观察者
  observer = new IntersectionObserver((entries) => {
    // 当目标元素进入视口
    if (entries[0].isIntersecting) {
      // 如果有更多数据且不在加载中状态且不是手动加载模式且未禁用
      if (props.hasMore && !props.loading && !props.manualLoad && !props.disabled) {
        emit('load-more')
      }
    }
  }, {
    root: null, // 使用视口作为根
    rootMargin: '0px 0px 200px 0px', // 下方增加200px提前触发
    threshold: props.threshold // 触发阈值
  })
  
  // 开始观察目标元素
  if (observerTarget.value) {
    observer.observe(observerTarget.value)
  }
}

// 监听hasMore变化，确保在动态变化时正确处理观察者
watch(() => props.hasMore, (newVal) => {
  if (newVal && observerTarget.value && !props.manualLoad) {
    setupObserver()
  }
})

// 组件挂载时
onMounted(() => {
  if (props.hasMore && !props.manualLoad) {
    setupObserver()
  }
})

// 组件卸载时，断开观察器连接
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.load-more-container {
  position: relative;
  width: 100%;
}

.observer-target {
  padding: 20px 0;
  text-align: center;
}

.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  color: var(--color-primary, #4b5563);
  animation: circle-loader 1.2s ease-in-out infinite;
  background: conic-gradient(from 0deg at 50% 50%, currentColor 0deg, currentColor 280deg, transparent 280deg, transparent 360deg);
}

.loading-spinner::after {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background-color: white;
}

/* 尺寸样式 */
.loading-spinner.size-small {
  width: 20px;
  height: 20px;
}

.loading-spinner.size-small::after {
  inset: 2px;
}

.loading-spinner.size-medium {
  width: 30px;
  height: 30px;
}

.loading-spinner.size-medium::after {
  inset: 3px;
}

.loading-spinner.size-large {
  width: 40px;
  height: 40px;
}

.loading-spinner.size-large::after {
  inset: 8px;
}

/* 颜色主题 */
.loading-spinner.theme-primary {
  color: var(--color-primary, #4b5563);
}

.loading-spinner.theme-success {
  color: var(--color-success, #10b981);
}

.loading-spinner.theme-info {
  color: var(--color-info, #3b82f6);
}

.loading-spinner.theme-warning {
  color: var(--color-warning, #f59e0b);
}

.loading-spinner.theme-danger {
  color: var(--color-danger, #ef4444);
}

@keyframes circle-loader {
  0% {
    transform: rotate(0deg);
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.8;
  }
}

.loading-text {
  font-size: 14px;
  color: #666;
}

.load-more-btn {
  background-color: var(--color-primary, #4b5563);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

/* 按钮尺寸 */
.load-more-btn.size-small {
  padding: 6px 14px;
  font-size: 12px;
}

.load-more-btn.size-medium {
  padding: 8px 20px;
  font-size: 14px;
}

.load-more-btn.size-large {
  padding: 10px 24px;
  font-size: 16px;
}

/* 按钮主题 */
.load-more-btn.theme-primary {
  background-color: var(--color-primary, #4b5563);
}

.load-more-btn.theme-success {
  background-color: var(--color-success, #10b981);
}

.load-more-btn.theme-info {
  background-color: var(--color-info, #3b82f6);
}

.load-more-btn.theme-warning {
  background-color: var(--color-warning, #f59e0b);
}

.load-more-btn.theme-danger {
  background-color: var(--color-danger, #ef4444);
}

.load-more-btn:hover {
  filter: brightness(90%);
}

.no-more {
  text-align: center;
  padding: 15px 0;
  color: #999;
  font-size: 14px;
}
</style> 