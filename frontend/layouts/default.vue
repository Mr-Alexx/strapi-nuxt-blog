<template>
  <div class="w-1080px m-inline-auto min-h-screen flex flex-col gap-6 md:flex-row bg-gray-100">
    <!-- 内容区域 -->
    <main class="flex-grow overflow-hidden mt-6 rounded-xl">
      <Nav />

      <div class="mx-auto py-4 bg-white">
        <slot />
      </div>

      <!-- 页脚 -->
      <footer class="m-block-4">
        <div class="mx-auto text-center text-gray-500 text-sm">
          <p>{{ $t('copyright', { year: yearStr }) }}</p>
          <p class="mt-1">{{ copyright }}</p>
        </div>
      </footer>
    </main>

    <!-- 侧栏 -->
    <Aside class="flex-shrink-0 w-280px rounded-xl" />
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