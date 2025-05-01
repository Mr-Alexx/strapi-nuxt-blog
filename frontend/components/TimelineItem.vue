<template>
  <div>
    <!-- 年月 -->
    <div class="pl-100px">
      <div class="timeline-yearmonth" :style="{ background, color }">
        <span>{{ yearMonth }}</span>
      </div>
    </div>

    <!-- 日期，文章 -->
    <div v-for="article in articles" :key="article.id" class="timeline-item">
      <div class="timeline-item__date">{{ Intl.DateTimeFormat(locale, { day: 'numeric' }).format(new
        Date(article.publishedAt)) }}</div>
      <i class="timeline-item__dot" :style="{ borderColor: background }"></i>
      <div class="timeline-item__content" :style="{ borderLeftColor: background }">
        <i class="content-line" :style="{ borderColor: background }"></i>
        <NuxtLink :to="localePath(`/post/${article.slug}`)" class="link" :style="{ color, background }" target="__blank">
          <span>{{ article.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { randomColor } from '@/utils'

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
  },
  background: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true
  }
})

// const styles = ref({})

// onMounted(() => {
//   const { background, color } = randomColor()

//   styles.value.color = color
//   styles.value.background = background
// })

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
}

.timeline-item__content .link:hover {
  opacity: 0.8;
}
</style>
