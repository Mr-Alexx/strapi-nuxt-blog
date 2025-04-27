<template>
  <div class="shadow-sm overflow-hidden">
    <!-- 文章列表 -->
    <div class="p-8 md:p-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLink v-for="article in articles" :key="article.id"
          class="bg-white p-6 rounded-lg border border-gray-100 border-solid" :to="localePath(`/post/${article.slug}`)">
          <LazyNuxtImg :src="article.image" class="w-full h-40 object-cover rounded-lg mb-4" />
          <div class="text-lg font-bold mb-2">{{ article.title }}</div>
          <div class="text-gray-600 mb-4">{{ article.description }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

const localePath = useLocalePath()
const { locale } = useI18n()

// 从strapi api中获取文章列表
const strapi = useStrapi()
const { data, loading, error } = await useAsyncData('articles', async () => {
  try {
    const data = await strapi.find('articles', {
      filters: {
        locale: locale.value
      }
    })
    return data
  } catch (error) {
    console.error('获取文章列表失败', error)
    return []
  }
})

const articles = computed(() => {
  return data.value.data
})

const pagination = computed(() => {
  return data.value.meta.pagination
})

onMounted(() => {
  console.log(articles.value)
  console.log(pagination.value)
})
</script>
