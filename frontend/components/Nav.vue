<template>
  <!-- 顶部导航栏 -->
  <header class="sticky top-0 z-50 bg-white">
    <div class="mx-auto md:px-6">
      <div class="flex items-center justify-between h-60px">
        <!-- 移动端显示的标题/LOGO -->
        <div class="flex md:hidden items-center">
          <h1 class="text-xl font-bold">Alex</h1>
        </div>
        
        <!-- 导航链接 -->
        <nav class="flex space-x-6">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="localePath(item.path)" 
            class="px-2 py-1 rounded-tl-12px rounded-br-12px rounded-tr-1px rounded-bl-1px hover:text-white"
            :class="[getActived(item.path) ? 'text-white font-medium bg-primary-100' : 'text-gray-700 hover:bg-primary-50']"
          >
            {{ $t(item.key) }}
          </NuxtLink>
        </nav>
        
        <!-- 语言切换 -->
        <div class="relative group text-gray-500 text-14px">
          <span class="flex items-center cursor-pointer hover:text-blue-600 transition-colors">
            <span @click="switchLanguage(anotherLocale.code)">{{ anotherLocale.name }}</span>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const anotherLocale = computed(() => {
  return locales.value.find(l => l.code !== locale.value)
})

// 切换语言
const switchLanguage = (code) => {
  if (locale.value === code) return
  setLocale(code)
}

const getActived = (path) => {
  if (path === '/') {
    return route.path.includes('/post/') || route.path === localePath(path)
  }
  return route.path === localePath(path)
}

const navItems = [
  { path: '/', key: 'nav.blog' },
  { path: '/archive', key: 'nav.timeline' },
  { path: '/bascketball', key: 'nav.bascketball' },
  { path: '/about', key: 'nav.about' },
]
</script> 