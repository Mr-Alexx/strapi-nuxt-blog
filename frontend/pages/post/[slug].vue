<template>
  <div v-if="data">
    <div class="flex flex-col gap-4 relative">
      <!-- 文章主体 -->
      <article class="w-full">
        <!-- 文章标题和元信息 -->
        <div class="mb-8">
          <h1 class="text-3xl text-center font-bold mb-4">{{ data.title }}</h1>
          <div class="flex justify-center items-center text-sm text-gray-500 mb-4">
            <span class="mr-4">{{ formatDate(data.publishedAt) }}</span>
            <span v-if="data.readingTime" class="flex items-center">
              <span class="i-carbon-time mr-1"></span>
              {{ data.readingTime }} {{ $t('article.minutesRead') }}
            </span>
          </div>

          <!-- 标签列表 -->
          <div v-if="data.tags && data.tags.data.length > 0" class="flex flex-wrap gap-2 mb-6">
            <NuxtLink v-for="tag in data.tags.data" :key="tag.id" :to="`/tags/${tag.attributes.slug}`"
              class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition">
              {{ tag.attributes.name }}
            </NuxtLink>
          </div>
        </div>
        <!-- 文章内容 -->
        <ArticleContent>
          <MDCRenderer v-if="data.html" :body="data.html.body" :data="data.html.data" :toc="data.html.toc" />
        </ArticleContent>
      </article>
    </div>
  </div>
  <div v-else class="py-20 text-center">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ $t('error.articleNotFound') }}</h2>
    <p class="text-gray-600 mb-8">{{ $t('error.articleNotFoundDesc') }}</p>
    <NuxtLink to="/" class="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition">
      {{ $t('common.backToHome') }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, toRaw } from 'vue'
import { parseMarkdown } from '@nuxtjs/mdc/runtime';
import { useI18n } from 'vue-i18n'

const route = useRoute()
const slug = route.params.slug
const { locale } = useI18n()

const layoutToc = useState('layoutToc', () => ({}))

// 日期格式化函数
const formatDate = (dateStr) => {
  if (!dateStr) return ''

  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const strapi = useStrapi()
const { data } = await useAsyncData('article', async () => {
  try {
    const { data, meta } = await strapi.find('articles', {
      filters: {
        slug,
        locale: locale.value
      },
      // populate: ['*']
    })
    const html = await parseMarkdown(data[0].content)

    layoutToc.value = html.toc
    return {
      ...data[0],
      html
    }
  } catch (error) {
    console.error(error)
  }
})

onMounted(async () => {
  console.log(1123432)
  console.log(toRaw(data.value))
})

// 设置页面元数据
useHead({
  title: computed(() => route.params.slug ? `${route.params.slug} | 文章` : '文章'),
  meta: [
    {
      name: 'description',
      content: '文章详情'
    }
  ]
})
</script>
