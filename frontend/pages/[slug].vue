<template>
  <div>
    <StrapiContent 
      content-type="articles" 
      :query="{ filters: { slug: { $eq: slug } } }"
    >
      <template #default="{ data }">
        <div v-if="data && data.length > 0">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- 文章主体 -->
            <div class="lg:col-span-8">
              <article>
                <!-- 文章标题和元信息 -->
                <div class="mb-8">
                  <h1 class="text-3xl font-bold mb-4">{{ data[0].attributes.title }}</h1>
                  <div class="flex items-center text-sm text-gray-500 mb-4">
                    <span class="mr-4">{{ formatDate(data[0].attributes.publishedAt) }}</span>
                    <span v-if="data[0].attributes.readingTime" class="flex items-center">
                      <span class="i-carbon-time mr-1"></span>
                      {{ data[0].attributes.readingTime }} {{ $t('article.minutesRead') }}
                    </span>
                  </div>
                  
                  <!-- 标签列表 -->
                  <div v-if="data[0].attributes.tags && data[0].attributes.tags.data.length > 0" class="flex flex-wrap gap-2 mb-6">
                    <NuxtLink 
                      v-for="tag in data[0].attributes.tags.data" 
                      :key="tag.id"
                      :to="`/tags/${tag.attributes.slug}`"
                      class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition"
                    >
                      {{ tag.attributes.name }}
                    </NuxtLink>
                  </div>

                  <!-- 文章封面图 -->
                  <div v-if="data[0].attributes.cover && data[0].attributes.cover.data" class="mb-8">
                    <img 
                      :src="$strapi.withAbsoluteUrl(data[0].attributes.cover.data.attributes.url)" 
                      :alt="data[0].attributes.title"
                      class="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                <!-- 文章内容 -->
                <ArticleContent>
                  <div v-html="data[0].attributes.content"></div>
                </ArticleContent>
              </article>
            </div>

            <!-- 侧边栏 -->
            <div class="lg:col-span-4">
              <div class="sticky top-20">
                <!-- 文章目录 -->
                <ArticleToc selector=".article-content h2, .article-content h3" />

                <!-- 相关文章 -->
                <div 
                  v-if="data[0].attributes.relatedArticles && data[0].attributes.relatedArticles.data.length > 0" 
                  class="mt-8 p-4 bg-white rounded-lg shadow-sm"
                >
                  <h3 class="text-lg font-medium mb-3">{{ $t('article.relatedArticles') }}</h3>
                  <ul class="space-y-3">
                    <li v-for="article in data[0].attributes.relatedArticles.data" :key="article.id">
                      <NuxtLink 
                        :to="`/${article.attributes.slug}`"
                        class="block hover:text-primary transition text-sm"
                      >
                        {{ article.attributes.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
    </StrapiContent>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const slug = route.params.slug

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
