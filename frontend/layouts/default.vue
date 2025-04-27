<template>
  <div class="min-h-screen flex flex-col md:flex-row bg-gray-">
    <div class="flex-none w-80">
      <Aside />
    </div>

    <!-- 右侧主内容 -->
    <main class="flex-grow bg-gray-50">
      <Nav />

      <!-- 页面内容 -->
      <div class="container mx-auto px-4 py-8">
        <slot />
      </div>

      <!-- 页脚 -->
      <footer class="bg-white border-t border-gray-200 py-6">
        <div class="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>{{ $t('copyright', { year: yearStr }) }}</p>
          <p class="mt-1">{{ copyright }}</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const copyright = ref('蜀ICP备222')
const yearStr = computed(() => {
  const currentYear = new Date().getFullYear()
  return currentYear > 2025 ? `2025-${currentYear}` : currentYear
})
</script> 