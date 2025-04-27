<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
    <div @click="test">test</div>
    <!-- 文章列表 -->
    <div class="p-8 md:p-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="article in articles" :key="article.id" class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 class="text-lg font-bold mb-2">{{ article.title }}</h3>
          <p class="text-gray-600 mb-4">{{ article.description }}</p> 
        </div>
      </div>  
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, onBeforeMount } from 'vue'

const test = () => {
  console.log('fuckdd')
}

// 从strapi api中获取文章列表
const strapi = useStrapi()
const { data, loading, error } = await useAsyncData('articles', async () => {
  try {
    const data = await strapi.find('articles', {
      // populate: ['*'],
      // filters: {
      //   status: 'published'
      // }
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
