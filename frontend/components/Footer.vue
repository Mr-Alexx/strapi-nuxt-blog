<template>
  <footer class="m-block-10 lt-md:mb-10">
    <div class="mx-auto text-center text-gray-500 text-sm">
      <p>{{ $t('copyright', { year: yearStr }) }}</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const yearStr = computed(() => {
  const currentYear = new Date().getFullYear()
  return currentYear > 2025 ? `2025-${currentYear}` : currentYear
})
</script>
