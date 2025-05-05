<template>
  <div>
    <div class="grid grid-rows-1">
      <NuxtLink v-for="(article, index) in articles" :key="article.id" class="flex gap-4 bg-white pb-6"
        :class="{ 'border-t border-gray-200 border-t-solid pt-6': index !== 0 }"
        :to="localePath(`/post/${article.slug}`)">
        <div class="w-30 h-30">
          <LazyNuxtImg v-if="article.image" :src="article.image" :alt="article.title"
            class="w-full h-full object-cover rounded-lg" />
          <div v-else class="w-full h-full bg-gray-200 rounded-lg"></div>
        </div>
        <div class="flex-1">
          <div class="text-lg font-bold mb-2">{{ article.title }}</div>
          <div class="text-gray-600 mb-4">{{ article.description }}</div>
          <div>
            <I18nDatetime :value="article.publishedAt" />
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- 加载更多组件 -->
    <LoadMore :loading="pagination.loading" :has-more="pagination.hasMore" @load-more="loadMoreArticles"
      :total-items="articles.length" theme="primary" size="medium" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, watch, reactive, computed } from 'vue'

const localePath = useLocalePath()
const { locale } = useI18n()
const strapi = useStrapi()

// 统一管理分页相关状态
const pagination = reactive({
  current: 1,        // 当前页码
  pageSize: 10,      // 每页大小
  total: 0,          // 总条数
  pageCount: 1,      // 总页数
  loading: false,    // 加载状态
  hasMore: true      // 是否有更多
})

// 文章列表，包含首页和加载更多的数据
const articlesList = reactive([])

/**
 * 通用的文章加载函数
 * @param {Number} page - 要加载的页码
 * @param {Boolean} isServerSide - 是否是服务端加载
 * @returns {Promise<Array>} 加载的文章数据
 */
const fetchArticles = async (page, isServerSide = false) => {
  try {
    if (!isServerSide) {
      pagination.loading = true
    }

    const { data, meta } = await strapi.find('articles', {
      filters: {
        locale: locale.value
      },
      pagination: {
        page,
        pageSize: pagination.pageSize
      },
      sort: ['publishedAt:desc']
    })

    // 更新分页信息
    Object.assign(pagination, {
      current: page,
      total: meta.pagination.total,
      pageCount: meta.pagination.pageCount,
      hasMore: page < meta.pagination.pageCount
    })
    console.log(pagination)
    return data
  } catch (error) {
    console.error(`${isServerSide ? '服务端' : '客户端'}加载文章失败:`, error)
    return []
  } finally {
    if (!isServerSide) {
      pagination.loading = false
    }
  }
}

// 服务端预取首页数据
const { data: initialData, refresh } = await useAsyncData(
  'home-articles',
  async () => {
    pagination.loading = true
    const data = await fetchArticles(1, true)
    pagination.loading = false
    return data
  },
  {
    // 监听语言变化，重新获取数据
    watch: [() => locale.value]
  }
)

// 计算属性，合并服务端数据和客户端加载的更多数据
const articles = computed(() => {
  // 确保 initialData 存在时才使用
  if (initialData.value && initialData.value.length > 0 && articlesList.length === 0) {
    return initialData.value
  }
  return articlesList.length > 0 ? articlesList : (initialData.value || [])
})

// 加载更多文章
const loadMoreArticles = async () => {
  if (pagination.loading || !pagination.hasMore) return

  const nextPage = pagination.current + 1
  const moreArticles = await fetchArticles(nextPage)

  // 初始化 articlesList（如果为空）
  if (articlesList.length === 0 && initialData.value) {
    articlesList.push(...initialData.value)
  }

  // 添加新加载的文章
  if (moreArticles.length > 0) {
    articlesList.push(...moreArticles)
  }
}

// 监听语言变化，重置列表
watch(() => locale.value, () => {
  // 清空客户端加载的文章
  articlesList.length = 0
  // 使用refreshNuxtData也可以
  refresh()
})

onMounted(() => {
  // 确保初始数据已经加载到 articlesList
  if (initialData.value && initialData.value.length > 0 && articlesList.length === 0) {
    articlesList.push(...initialData.value)
  }
})
</script>
