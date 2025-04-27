<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
    <!-- 页面标题区域 -->
    <section class="p-8 md:p-12 border-b border-gray-100 text-center">
      <h1 class="text-3xl font-bold mb-2">我的作品集</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        这里展示了我最近完成的一些项目，涵盖Web应用、移动应用及UI设计
      </p>
    </section>
    
    <!-- 项目过滤栏 -->
    <section class="px-8 md:px-12 py-6 border-b border-gray-100">
      <div class="flex flex-wrap justify-center gap-3">
        <button 
          v-for="category in ['全部', 'Web应用', '移动应用', 'UI设计', '后端开发']" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-4 py-2 rounded-lg transition-all duration-300 font-medium',
            activeCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </section>
    
    <!-- 项目展示网格 -->
    <section class="p-8 md:p-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 项目卡片 1 -->
        <div v-for="(project, index) in filteredProjects" :key="index" class="group">
          <div class="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
            <!-- 项目图片 -->
            <div class="relative overflow-hidden h-60">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div class="p-4 text-white">
                  <div class="flex gap-2 mb-2">
                    <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 bg-blue-600/80 rounded-full text-xs font-medium">
                      {{ tag }}
                    </span>
                  </div>
                  <a href="#" class="inline-block px-4 py-2 bg-white text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors">
                    查看详情
                  </a>
                </div>
              </div>
            </div>
            
            <!-- 项目信息 -->
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 flex-grow">{{ project.description }}</p>
              <div class="flex justify-between items-center">
                <div class="flex gap-2">
                  <a :href="project.demoLink" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a>
                  <a :href="project.githubLink" class="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    源码
                  </a>
                </div>
                <span class="text-sm text-gray-500">{{ project.year }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 活动分类状态
const activeCategory = ref('全部');

// 项目数据
const projects = ref([
  {
    title: '智能电商平台',
    description: '基于Vue.js和Node.js开发的现代电商平台，集成了智能推荐系统和实时库存管理。',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    category: 'Web应用',
    year: '2023',
    demoLink: '#',
    githubLink: '#',
    tags: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    title: '健康追踪应用',
    description: '使用React Native开发的跨平台移动应用，帮助用户追踪运动和饮食习惯，提供个性化的健康建议。',
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2085&q=80',
    category: '移动应用',
    year: '2022',
    demoLink: '#',
    githubLink: '#',
    tags: ['React Native', 'Firebase', 'Expo']
  },
  {
    title: '项目管理工具',
    description: '企业级项目管理系统，集成了任务分配、进度跟踪和资源管理功能，提高团队协作效率。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Web应用',
    year: '2022',
    demoLink: '#',
    githubLink: '#',
    tags: ['React.js', 'Node.js', 'MongoDB']
  },
  {
    title: '智能家居控制系统',
    description: '基于物联网技术的智能家居控制系统，允许用户通过移动应用远程控制家中的设备。',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    category: '后端开发',
    year: '2021',
    demoLink: '#',
    githubLink: '#',
    tags: ['IoT', 'Node.js', 'MQTT']
  },
  {
    title: '餐厅预订应用',
    description: '移动应用程序，允许用户查找附近的餐厅、查看菜单、预订座位并提供评价和反馈。',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: '移动应用',
    year: '2021',
    demoLink: '#',
    githubLink: '#',
    tags: ['Flutter', 'Firebase', 'Google Maps']
  },
  {
    title: '公司品牌重塑',
    description: 'UI/UX设计项目，为科技公司重新设计品牌标识、网站和移动应用界面，提升用户体验和品牌形象。',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    category: 'UI设计',
    year: '2020',
    demoLink: '#',
    githubLink: '#',
    tags: ['Figma', 'Adobe XD', 'Branding']
  }
]);

// 根据活动分类筛选项目
const filteredProjects = computed(() => {
  if (activeCategory.value === '全部') {
    return projects.value;
  }
  return projects.value.filter(project => project.category === activeCategory.value);
});
</script> 