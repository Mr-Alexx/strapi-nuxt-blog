<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="max-w-lg w-full text-center">
      <div class="mb-8">
        <span class="text-blue-600 text-7xl i-carbon-warning"></span>
      </div>
      <h1 class="text-4xl font-bold mb-4 text-gray-900">{{ statusCode }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ errorMessage }}</p>
      <NuxtLink to="/" class="btn btn-primary">
        {{ $t('backToHome') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const error = useError()
const { t } = useI18n()

// 根据错误状态码显示不同消息
const statusCode = computed(() => error.value?.statusCode || 404)
const errorMessage = computed(() => {
  if (!error.value) return t('pageNotFound')
  
  switch (error.value.statusCode) {
    case 404:
      return t('pageNotFound')
    case 500:
      return t('serverError')
    default:
      return error.value.message || t('unknownError')
  }
})

// 提供重置错误的方法
const handleError = () => clearError({ redirect: '/' })
</script> 