<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
    <!-- 个人介绍区域 -->
    <section class="border-b border-gray-100">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500">
          <!-- 可以替换为实际头像图片 -->
          <div class="w-full h-full bg-primary-100 flex items-center justify-center text-white text-80px">
            <span>潜</span>
          </div>
        </div>

        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl font-bold mb-2">Alex</h1>
          <p class="text-xl text-gray-600 mb-4">前端开发工程师</p>
          <p class="text-gray-600 mb-6 max-w-2xl">
            我是一名热爱编程和技术的前端开发工程师，拥有9年的开发经验。专注于创建用户友好、高性能的Web应用程序和移动应用。擅长解决复杂问题，并持续学习新技术以提升自己的技能。
          </p>

          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="mailto:1983964596@qq.com"
              class="inline-flex items-center px-4 py-2 bg-primary-100 hover:opacity-80 hover:text-white text-white font-medium rounded-lg transition duration-150">
              <nuxt-icon name="email" class="text-xl mr-2" />
              联系我
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能展示区域 -->
    <section class="p-8 md:p-12 border-b border-gray-100">
      <h2 class="text-2xl font-bold mb-8">专业技能</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <!-- 前端技能 -->
        <div v-for="group in skills" :key="group.groupName">
          <h3 class="text-lg font-semibold mb-4 flex items-center">
            <nuxt-icon :name="group.icon" class="text-20px mr-2 text-primary-100" />
            {{ group.groupName }}
          </h3>

          <div class="space-y-4">
            <div v-for="skill in group.skills" :key="skill.name">
              <div class="flex justify-between mb-1">
                <span class="font-medium">{{ skill.name }}</span>
                <span class="text-sm text-gray-600">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 这里可以添加需要的逻辑
const skills = ref([
  {
    groupName: '前端开发',
    icon: 'frontend',
    skills: [
      {
        name: 'HTML5 / CSS3',
        level: 95
      },
      {
        name: 'JavaScript / TypeScript',
        level: 90
      },
      {
        name: 'Vue2 / Vue3',
        level: 90
      },
      {
        name: 'Nuxt.js',
        level: 90
      },
      {
        name: 'React',
        level: 85
      },
      {
        name: 'Next.js',
        level: 70
      },
      {
        name: 'echarts',
        level: 85
      },
      {
        name: 'ant-design',
        level: 90
      },
      {
        name: 'Element-ui',
        level: 90
      },
      {
        name: 'uniapp',
        level: 80
      },
      {
        name: 'vant-ui',
        level: 80
      },
      {
        name: 'Sass / Less / Unocss',
        level: 90
      },
      {
        name: 'Chrome-Extension',
        level: 90
      },
      {
        name: 'Vite / Webpack',
        level: 80
      },
    ]
  },
  {
    groupName: '后端开发',
    icon: 'backend',
    skills: [
      {
        name: 'Node.js',
        level: 88
      },
      {
        name: 'Nest.js',
        level: 88
      },
      {
        name: 'Strapi',
        level: 80
      },
      {
        name: 'Python3',
        level: 60
      },
      {
        name: 'MySQL',
        level: 70
      },
      {
        name: 'Typeorm',
        level: 80
      },
      {
        name: 'Prisma',
        level: 80
      },
      {
        name: 'Redis',
        level: 75
      },

    ]
  },
  {
    groupName: 'CI/CD',
    icon: 'ci-cd',
    skills: [
      {
        name: 'Jenkins',
        level: 75
      },
      {
        name: 'Docker',
        level: 75
      },
      {
        name: 'Github Actions',
        level: 75
      },
      {
        name: 'Nginx',
        level: 80
      },
    ]
  },
  {
    groupName: '开发工具',
    icon: 'tools',
    skills: [
      {
        name: 'Git / GitHub',
        level: 95
      },
      {
        name: 'VS Code / Cursor / HbuilderX',
        level: 90
      },
      {
        name: 'Postman / ApiFox',
        level: 80
      },
      {
        name: '墨刀 / 蓝湖',
        level: 80
      },
    ]
  },
  {
    groupName: '软技能',
    icon: 'soft-skills',
    skills: [
      {
        name: '团队管理',
        level: 80
      },
      {
        name: '团队协作',
        level: 95
      },
      {
        name: '沟通能力',
        level: 90
      },
      {
        name: '解决问题能力',
        level: 92
      }
    ]
  }
])
</script>