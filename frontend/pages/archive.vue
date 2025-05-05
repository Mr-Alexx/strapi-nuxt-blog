<template>
  <div>
    <div>
      <h1 class="text-2xl font-bold mb-4">{{ $t('archive.title') }}</h1>

      <!-- 文章统计信息 -->
      <div class="text-base text-gray-600 mb-8">
        {{ $t('archive.totalArticles', { count: totalArticles }) }}
      </div>
    </div>

    <!-- 按年月归档的文章列表 --> 
    <div v-for="(yearMonthData, yearMonth) in groupedArticles" :key="yearMonth">
      <TimelineItem :yearMonth="yearMonth" :articles="yearMonthData.articles" :key="yearMonth" :background="yearMonthData.background" :color="yearMonthData.color" />
    </div>
    <div class="pl-100px">
      <div class="inline-flex px-4 py-1 text-xs translate-x--1/2 bg-dark-100 rounded-full text-white">{{$t('archive.start')}}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { randomColor } from '@/utils'
const { locale, t } = useI18n()
const strapi = useStrapi()

// 获取文章数据（真实数据或模拟数据）
const { data } = await useAsyncData('archive-articles', async () => {
  try {
    // 否则从API获取真实数据
    const { data, meta } = await strapi.find('articles', {
      filters: {
        locale: locale.value
      },
      pagination: {
        limit: 100 // 设置一个较大的限制，以获取所有文章
      },
      sort: ['publishedAt:desc'] // 按发布时间降序排序
    })
    return {
      data,
      total: meta.pagination.total
    }
  } catch (error) {
    console.error('获取归档文章失败', error)
    return {
      data:[],
      total: 0
    }
  }
}, {
  watch: [() => locale.value] // 监听语言变化，重新获取数据
})

const articles = computed(() => data.value.data)
const totalArticles = computed(() => data.value.total)

// 按年月对文章进行分组
const groupedArticles = computed(() => {
  if (!articles.value) return {}

  const grouped = {}

  articles.value.forEach(article => {
    if (!article.publishedAt) return
    const date = new Date(article.publishedAt)

    // 使用 Intl.DateTimeFormat 格式化日期
    // ex: 2025年01月
    const groupKey = new Intl.DateTimeFormat(locale.value, {
      year: 'numeric',
      month: 'long',
    }).format(date)

    // 确保年月对象存在
    if (!grouped[groupKey]) {
      grouped[groupKey] = {
        ...randomColor(),
        articles: []
      }
    }

    // 添加文章到对应的月份数组
    grouped[groupKey].articles.push(article)
  })
  
  return grouped
})

onMounted(() => {
  console.log(groupedArticles.value)
})

// 设置页面元数据
useHead({
  title: computed(() => t('archive.pageTitle')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('archive.pageDescription'))
    }
  ]
})
</script>

