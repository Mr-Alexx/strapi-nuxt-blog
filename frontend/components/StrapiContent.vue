<template>
  <div>
    <div v-if="loading" class="py-10 text-center">
      <p class="text-gray-500">加载中...</p>
    </div>
    <div v-else-if="error">
      <p class="text-red-500">{{ errorMessage }}</p>
    </div>
    <div v-else>
      <slot :data="data"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const strapi = useStrapi()

const props = defineProps({
  contentType: {
    type: String,
    required: true
  },
  query: {
    type: Object,
    default: () => ({})
  },
  singleType: {
    type: Boolean,
    default: false
  }
})

const loading = ref(true)
const error = ref(null)
const data = ref(null)

const errorMessage = computed(() => {
  return error.value ? `获取数据失败: ${error.value.message}` : '未知错误'
})

const fetchData = async () => {
  loading.value = true
  error.value = null
  
  try {
    let response
    const queryWithLocale = {
      ...props.query,
      locale: locale.value
    }
    
    if (props.singleType) {
      response = await strapi.find(props.contentType, { 
        params: { 
          populate: '*',
          ...queryWithLocale
        } 
      })
    } else {
      response = await strapi.findOne(props.contentType, { 
        params: { 
          populate: '*',
          ...queryWithLocale
        } 
      })
    }
    
    data.value = response.data
  } catch (err) {
    console.error('Strapi content fetch error:', err)
    error.value = err
  } finally {
    loading.value = false
  }
}

// 监听语言变化重新获取数据
watch(() => locale.value, () => {
  fetchData()
})

onMounted(() => {
  fetchData()
})
</script> 