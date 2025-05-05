<template>
  <div class="md:w-1200px m-inline-auto min-h-screen flex flex-col gap-6 md:flex-row bg-gray-100 lt-md:w-full">
    <div class="flex-1 min-w-0 mt-6 lt-md:mt-0">
      <Nav class="rounded-t-xl border-b border-b-solid border-gray-200" />
      <!-- 内容区域 -->
      <main class="md:rounded-b-xl bg-white shadow-md p4 md:p6 lt-md:pt-6">

        <div class="mx-auto">
          <div v-if="data">
            <div class="flex flex-col gap-4 relative">
              <!-- 文章主体 -->
              <article class="w-full">
                <!-- 文章标题和元信息 -->
                <div class="mb-8">
                  <h1 class="text-3xl text-center font-bold mb-4">{{ data.title }}</h1>
                  <div class="text-center mb-4">
                    <I18nDatetime :value="data.publishedAt" />
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
            <NuxtLink to="/"
              class="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition">
              {{ $t('common.backToHome') }}
            </NuxtLink>
          </div>
        </div>
      </main>

      <!-- 页脚 -->
      <Footer />
    </div>
    <!-- 侧栏 -->
    <aside class="flex-shrink-0 w-300px rounded-xl mt-6 flex flex-col gap-6 lt-md:hidden">
      <!-- 文章目录 -->
      <ArticleToc class="w-200px shadow-md" :toc="data.html.toc" />
    </aside>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, toRaw } from 'vue'
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

definePageMeta({
  layout: 'post',
})


import { useI18n } from 'vue-i18n'

const route = useRoute()
const slug = route.params.slug
const { locale } = useI18n()

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
