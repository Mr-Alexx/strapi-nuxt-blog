<template>
  <!-- 左侧个人信息面板 - PC端显示，移动端隐藏 -->
  <div class="scroll-auto bg-white p-4 top-4 overflow-auto self-start rounded-xl w-full scrollbar-custom">
    <div class="flex flex-col items-center mb-6">
      <div @click="test"
        class="flex items-center justify-center w-40 h-40 rounded-full overflow-hidden mb-4 bg-blue-500 text-white text-7xl">
        <span>潜</span>
      </div>
      <h1 class="text-2xl font-bold mb-1">Alex</h1>
      <p class="text-gray-600 text-center">{{ $t("sideContent.job") }}</p>
    </div>

    <!-- 联系信息 -->
    <div class="space-y-4 mt-6">
      <div class="flex items-center">
        <span class="i-carbon-location text-gray-700 mr-3 text-xl"></span>
        <div>
          <p class="text-gray-700">{{ $t("sideContent.location") }}</p>
          <p class="text-gray-900">广东 广州</p>
        </div>
      </div>

      <div class="flex items-center">
        <span class="i-carbon-phone text-gray-700 mr-3 text-xl"></span>
        <div>
          <p class="text-gray-700">{{ $t("sideContent.phone") }}</p>
          <p class="text-gray-900">176 **** 7891</p>
        </div>
      </div>

      <div class="flex items-center">
        <span class="i-carbon-email text-gray-700 mr-3 text-xl"></span>
        <div>
          <p class="text-gray-700">{{ $t("sideContent.email") }}</p>
          <p class="text-gray-900">1983964596@qq.com</p>
        </div>
      </div>

      <div class="flex items-center">
        <span class="i-carbon-logo-github text-gray-700 mr-3 text-xl"></span>
        <div>
          <p class="text-gray-700">{{ $t("sideContent.github") }}</p>
          <a href="https://github.com" target="_blank" class="text-gray-900 hover:text-blue-600">github.com/world56</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

const test = () => {
  console.log('test')
}
</script>
