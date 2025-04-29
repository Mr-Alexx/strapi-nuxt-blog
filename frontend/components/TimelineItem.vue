<template>
  <div>
    <!-- 年月 -->
    <div class="pl-100px">
      <div class="timeline-yearmonth" :style="styles">
        <span>{{ yearMonth }}</span>
      </div>
    </div>

    <!-- 日期，文章 -->
    <div v-for="article in articles" :key="article.id" class="timeline-item">
      <div class="timeline-item__date">{{ Intl.DateTimeFormat(locale, { day: 'numeric' }).format(new
        Date(article.publishedAt)) }}</div>
      <i class="timeline-item__dot" :style="{ borderColor: styles.background }"></i>
      <div class="timeline-item__content" :style="{ borderLeftColor: styles.background }">
        <i class="content-line" :style="{ borderColor: styles.background }"></i>
        <NuxtLink :to="localePath(`/post/${article.slug}`)" class="link" :style="styles" target="__blank">
          <span>{{ article.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const localePath = useLocalePath()

const props = defineProps({
  yearMonth: {
    type: String,
    required: true
  },
  articles: {
    type: Array,
    required: true
  }
})

const styles = ref({})

const isDarkColor = (r, g, b) => {
  // 使用 W3C 推荐的亮度公式判断颜色深浅
  const brightness = 0.299 * r + 0.587 * g + 0.114 * b
  return brightness < 128
}

/**
 * @description 生成随机颜色，如何是深色则字体色为白色，否则为黑色
 * @returns {Object} 返回颜色对象，包含背景色和文字色
 */
const randomColor = () => {
  // 生成随机的 RGB 值
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  const background = `rgb(${r}, ${g}, ${b})`
  
  const color = isDarkColor(r, g, b) ? '#fff' : '#000'

  return { background, color }
}

onMounted(() => {
  const { background, color } = randomColor()
  
  styles.value.color = color
  styles.value.background = background
})

</script>

<style scoped>
.timeline-yearmonth {
  display: inline-block;
  transform: translateX(-50%);
  padding-inline: 16px;
  text-align: center;
  padding-block: 6px;
  border-radius: 50px;
  font-size: 12px;
}

.timeline-item {
  display: flex;
  align-items: center;
  position: relative;

}

.timeline-item__dot {
  content: '';
  border-radius: 50%;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 96px;
  transform: translateY(-50%);
  z-index: 10;
  border: 4px solid transparent;
  padding: 2px;
  box-shadow: 0 0 0 4px #fff;
  background-color: #fff;
  transition: transform 0.15s ease-in-out;
}

.timeline-item:hover .timeline-item__dot {
  transform: translateY(-50%) scale(1.5);
}

.timeline-item__date {
  width: 100px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 24px;
  font-size: 14px;
}

.timeline-item__content {
  flex: 1;
  border-left: 4px solid transparent;
  padding-left: 24px;
  padding-block: 16px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
}

.content-line {
  content: '';
  width: 20px;
  height: 10px;
  border-radius: 10px 1px;
  border: 1px solid transparent;
  border-left: none;
  border-top: none;
  position: absolute;
  left: 4px;
  z-index: 10;
  top: 25px;
}

.timeline-item__content .link {
  padding: 8px 16px;
  border-radius: 12px 1px;
  display: inline-flex;
  color: #fff !important;
}

.timeline-item__content .link:hover {
  opacity: 0.8;
}
</style>
