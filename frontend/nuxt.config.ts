// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-01',
  devtools: { enabled: true },

  vite: {
    hmr: {
      overlay: false,
      hot: true,
      clientPort: 3000,
    }
  },

  // 添加需要的模块
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/strapi'
  ],

  // UnoCSS 配置
  unocss: {
    // 预设
    uno: true,
    icons: true,
    attributify: true,
    // 自定义规则
    shortcuts: {
      'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md transition-all duration-200',
      'btn-primary': 'bg-blue-600 text-white hover:bg-blue-700',
      'btn-secondary': 'bg-gray-100 text-gray-800 hover:bg-gray-200',
      'card': 'bg-white rounded-lg shadow-md overflow-hidden',
      'section-title': 'text-3xl font-bold mb-6 text-gray-900',
      'container-custom': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      'nav-link': 'text-gray-700 hover:text-blue-600 transition-colors duration-200',
      'nav-link-active': 'text-blue-600 font-medium',
      'footer-link': 'text-gray-400 hover:text-white transition-colors duration-200',
    },
    theme: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      },
    },
  },

  // i18n 配置
  i18n: {
    locales: [
      {
        code: 'zh',
        name: '中文',
        file: 'zh-CN.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en-US.json'
      }
    ],
    defaultLocale: 'zh', // 默认使用中文
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: './locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    }
  },

  // Strapi 配置
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:9137',
    prefix: '/api',
    version: 'v5',
    cookie: {},
    cookieName: 'strapi_jwt'
  },

  // 添加全局CSS
  css: [
    '@/assets/styles/main.css',
  ],

  // 应用设置
  app: {
    head: {
      title: 'DevTT - Web开发解决方案',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '专业的Web和移动应用开发服务，为您的业务提供创新数字解决方案。' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // 生产模式优化
  nitro: {
    preset: 'node-server',
    compressPublicAssets: true,
    compatibilityDate: '2025-04-01'
  }
})