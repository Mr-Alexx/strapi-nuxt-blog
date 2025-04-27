<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
    <!-- 个人介绍区域 -->
    <section class="p-8 md:p-12 border-b border-gray-100">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500">
          <!-- 可以替换为实际头像图片 -->
          <div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-3xl font-bold mb-2">张三</h1>
          <p class="text-xl text-gray-600 mb-4">全栈开发工程师</p>
          <p class="text-gray-600 mb-6 max-w-2xl">
            我是一名热爱编程和技术的全栈开发工程师，拥有5年的开发经验。专注于创建用户友好、高性能的Web应用程序和移动应用。擅长解决复杂问题，并持续学习新技术以提升自己的技能。
          </p>
          
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href="#" class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              联系我
            </a>
            <a href="/resume.pdf" class="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              下载简历
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
        <div>
          <h3 class="text-lg font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            前端开发
          </h3>
          
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">HTML5 / CSS3</span>
                <span class="text-sm text-gray-600">95%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">JavaScript / TypeScript</span>
                <span class="text-sm text-gray-600">90%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Vue.js</span>
                <span class="text-sm text-gray-600">92%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 92%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">React.js</span>
                <span class="text-sm text-gray-600">85%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 后端技能 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            后端开发
          </h3>
          
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Node.js</span>
                <span class="text-sm text-gray-600">88%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 88%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Express / NestJS</span>
                <span class="text-sm text-gray-600">85%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 85%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">MongoDB / MySQL</span>
                <span class="text-sm text-gray-600">80%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 80%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Docker / Kubernetes</span>
                <span class="text-sm text-gray-600">75%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 75%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 其他技能 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            开发工具
          </h3>
          
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">Git / GitHub</span>
                <span class="text-sm text-gray-600">95%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">VS Code / WebStorm</span>
                <span class="text-sm text-gray-600">90%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 90%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 软技能 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            软技能
          </h3>
          
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">团队协作</span>
                <span class="text-sm text-gray-600">95%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">沟通能力</span>
                <span class="text-sm text-gray-600">90%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 90%"></div>
              </div>
            </div>
            
            <div>
              <div class="flex justify-between mb-1">
                <span class="font-medium">解决问题能力</span>
                <span class="text-sm text-gray-600">92%</span>
              </div>
              <div class="h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-blue-600 rounded-full" style="width: 92%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 工作经验区域 -->
    <section class="p-8 md:p-12 border-b border-gray-100">
      <h2 class="text-2xl font-bold mb-8">工作经验</h2>
      
      <div class="space-y-12">
        <!-- 经验项 1 -->
        <div class="relative pl-8 md:pl-0">
          <!-- 时间线 (仅在中等尺寸及以上设备显示) -->
          <div class="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div class="relative md:ml-8">
            <!-- 时间点标记 (仅在中等尺寸及以上设备显示) -->
            <div class="hidden md:block absolute -left-10 top-1 w-5 h-5 rounded-full border-4 border-blue-600 bg-white"></div>
            
            <h3 class="text-xl font-bold">高级全栈开发工程师</h3>
            <div class="flex items-center mt-1 mb-3">
              <span class="text-blue-600 font-medium">科技创新有限公司</span>
              <span class="mx-2 text-gray-400">•</span>
              <span class="text-gray-600">2020年 - 至今</span>
            </div>
            
            <p class="text-gray-600 mb-4">
              负责公司核心产品的前端架构设计和开发工作，使用Vue.js和Node.js技术栈。带领前端团队完成了多个关键项目，提高了应用性能和用户体验。
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Vue.js</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Node.js</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">MongoDB</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Docker</span>
            </div>
          </div>
        </div>
        
        <!-- 经验项 2 -->
        <div class="relative pl-8 md:pl-0">
          <!-- 时间线连接 -->
          <div class="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div class="relative md:ml-8">
            <!-- 时间点标记 -->
            <div class="hidden md:block absolute -left-10 top-1 w-5 h-5 rounded-full border-4 border-blue-600 bg-white"></div>
            
            <h3 class="text-xl font-bold">前端开发工程师</h3>
            <div class="flex items-center mt-1 mb-3">
              <span class="text-blue-600 font-medium">网络科技有限公司</span>
              <span class="mx-2 text-gray-400">•</span>
              <span class="text-gray-600">2018年 - 2020年</span>
            </div>
            
            <p class="text-gray-600 mb-4">
              参与企业级SaaS平台的前端开发，主要使用React.js框架。优化了应用性能，减少了50%的加载时间。实现了多个复杂交互功能，提升了用户体验。
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">React.js</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Redux</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Express</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">MySQL</span>
            </div>
          </div>
        </div>
        
        <!-- 经验项 3 -->
        <div class="relative pl-8 md:pl-0">
          <!-- 时间线连接 -->
          <div class="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div class="relative md:ml-8">
            <!-- 时间点标记 -->
            <div class="hidden md:block absolute -left-10 top-1 w-5 h-5 rounded-full border-4 border-blue-600 bg-white"></div>
            
            <h3 class="text-xl font-bold">Junior前端开发</h3>
            <div class="flex items-center mt-1 mb-3">
              <span class="text-blue-600 font-medium">互联网科技有限公司</span>
              <span class="mx-2 text-gray-400">•</span>
              <span class="text-gray-600">2016年 - 2018年</span>
            </div>
            
            <p class="text-gray-600 mb-4">
              负责公司官网和内部系统的前端开发和维护。使用HTML、CSS和JavaScript实现设计稿，确保网站在各种设备上的响应式表现。
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">HTML5</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">CSS3</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">JavaScript</span>
              <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">jQuery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 教育背景 -->
    <section class="p-8 md:p-12">
      <h2 class="text-2xl font-bold mb-8">教育背景</h2>
      
      <div class="space-y-8">
        <div class="flex flex-col md:flex-row md:items-center">
          <div class="flex-1">
            <h3 class="text-xl font-bold">计算机科学与技术</h3>
            <p class="text-blue-600 font-medium">四川大学</p>
            <p class="text-gray-600 mt-1">
              本科学位 | 2012年 - 2016年
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <span class="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-lg">优秀毕业生</span>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row md:items-center">
          <div class="flex-1">
            <h3 class="text-xl font-bold">Web全栈开发</h3>
            <p class="text-blue-600 font-medium">编程训练营</p>
            <p class="text-gray-600 mt-1">
              专业证书 | 2016年
            </p>
          </div>
          <div class="mt-4 md:mt-0">
            <span class="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-lg">优秀学员</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 这里可以添加需要的逻辑
</script> 