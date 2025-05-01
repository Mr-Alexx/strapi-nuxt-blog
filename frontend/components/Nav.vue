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
          <NuxtLink v-for="item in navItems" :key="item.path" :to="localePath(item.path)"
            class="px-2 py-1 rounded-tl-12px rounded-br-12px rounded-tr-1px rounded-bl-1px hover:text-white"
            :class="[getActived(item.path) ? 'text-white font-medium bg-primary-100' : 'text-gray-700 hover:bg-primary-50']">
            {{ $t(item.key) }}
          </NuxtLink>
        </nav>

        <!-- 语言切换/暗黑模式切换 -->
        <div class="flex gap-2 items-center text-gray-500 text-14px">
          <span class="flex items-center cursor-pointer hover:text-blue-600 transition-colors">
            <span @click="switchLanguage(anotherLocale.code)">
              <nuxt-icon :name="anotherLocale.code === 'en-US' ? 'cn' : 'en'" />
            </span>
          </span>
          <span class="flex items-center cursor-pointer hover:text-blue-600 transition-colors">
            <span @click="switchMode($event, themeMode === 'light' ? 'dark' : 'light')">
              <nuxt-icon :name="themeMode === 'dark' ? 'dark' : 'light'" />
            </span>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
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
  // { path: '/bascketball', key: 'nav.bascketball' },
  { path: '/projects', key: 'nav.projects' },
  { path: '/about', key: 'nav.about' },
]

const themeMode = ref('light')
// 暗黑模式切换
// const switchMode = (mode) => {
//   themeMode.value = mode
//   localStorage.setItem('themeMode', mode)
//   document.documentElement.classList.toggle('dark-mode')
// }

// 切换主题
const switchMode = (event, mode) => {
  // 检查浏览器是否支持 View Transition API
  if (!document.startViewTransition) {
    // 不支持则直接切换主题，不添加动画
    document.documentElement.classList.toggle('dark-mode')
    return
  }
  const transition = document.startViewTransition(() => {
    document.documentElement.classList.toggle('dark-mode')
  })

  transition.ready.then(() => {
    const { clientX, clientY } = event

    const endRadius = Math.hypot(Math.max(clientX, innerWidth - clientX), Math.max(clientY, innerHeight - clientY))

    const clipPath = [`circle(0px at ${clientX}px ${clientY}px)`, `circle(${endRadius}px at ${clientX}px ${clientY}px)`]

    const isDark = document.documentElement.classList.contains('dark-mode')

    document.documentElement.animate(
      {
        clipPath: isDark ? clipPath.reverse() : clipPath
      },
      {
        duration: 450,
        easing: 'ease-in-out',
        pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)'
      }
    )

    themeMode.value = mode
    localStorage.setItem('themeMode', mode)
  })
}

onMounted(() => {
  const mode = localStorage.getItem('themeMode')
  if (mode) {
    switchMode(mode)
  }
})
</script>