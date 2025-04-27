<template>
  <!-- 顶部导航栏 -->
  <header class="sticky top-0 z-50 bg-white">
    <div class="mx-auto px-4">
      <div class="flex items-center justify-between h-16">
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
            :class="[$route.path === localePath(item.path) ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600']"
          >
            {{ $t(item.key) }}
          </NuxtLink>
        </nav>
        
        <!-- 语言切换 -->
        <div class="relative group">
          <span class="flex items-center text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
            <span>{{ currentLocaleName }}</span>
            <span class="i-carbon-chevron-down ml-1"></span>
          </span>
          <div class="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div class="py-1">
              <span 
                v-for="locale in allLocales" 
                :key="locale.code" 
                @click="switchLanguage(locale.code)"
                class="block w-full text-left px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 user-select-none"
              >
                {{ locale.name }}
              </span>
            </div>
          </div>
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

// 处理所有可用的语言
const allLocales = computed(() => {
  return locales.value
})

// 当前语言名称
const currentLocaleName = computed(() => {
  const current = allLocales.value.find(l => l.code === locale.value)
  return current ? current.name : ''
})

// 切换语言
const switchLanguage = (code) => {
  if (locale.value === code) return
  setLocale(code)
}

const navItems = [
  { path: '/', key: 'nav.blog' },
  { path: '/timeline', key: 'nav.timeline' },
  { path: '/bascketball', key: 'nav.bascketball' },
  { path: '/about', key: 'nav.about' },
]
</script> 