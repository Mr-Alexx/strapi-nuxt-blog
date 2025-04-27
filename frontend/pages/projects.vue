<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
    <!-- 页面标题区域 -->
    <section class="p-8 border-b border-gray-100">
      <h1 class="text-3xl font-bold">我的项目</h1>
      <p class="text-gray-500 mt-2">展示我参与和主导的一些重要项目</p>
    </section>

    <!-- 项目展示部分 -->
    <div class="p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 项目卡片1 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-300">
          <div class="h-48 bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="电商平台项目" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">企业级电商平台</h3>
            <p class="text-gray-600 text-sm mb-4">
              基于微服务架构的大型电商平台，支持千万级用户访问，前端采用React技术栈开发
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">TypeScript</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Redux</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Ant Design</span>
            </div>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情 →</a>
          </div>
        </div>

        <!-- 项目卡片2 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-300">
          <div class="h-48 bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="数据可视化项目" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">数据可视化分析平台</h3>
            <p class="text-gray-600 text-sm mb-4">
              企业级数据分析和可视化平台，支持丰富的图表展示和实时数据更新，提升数据决策效率
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Vue.js</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">ECharts</span>
              <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">D3.js</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">WebSocket</span>
            </div>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情 →</a>
          </div>
        </div>

        <!-- 项目卡片3 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-300">
          <div class="h-48 bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="社交应用项目" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">社交媒体应用</h3>
            <p class="text-gray-600 text-sm mb-4">
              基于React Native开发的跨平台社交媒体应用，支持图文分享、短视频、私信等功能
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React Native</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">GraphQL</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Firebase</span>
              <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Redux</span>
            </div>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情 →</a>
          </div>
        </div>

        <!-- 项目卡片4 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-300">
          <div class="h-48 bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="CRM系统项目" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">企业CRM系统</h3>
            <p class="text-gray-600 text-sm mb-4">
              为大型企业定制的客户关系管理系统，提高客户管理效率和销售转化率
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Vue.js</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Element UI</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Vuex</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Node.js</span>
            </div>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情 →</a>
          </div>
        </div>

        <!-- 项目卡片5 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-300">
          <div class="h-48 bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="AI助手项目" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">AI智能助手应用</h3>
            <p class="text-gray-600 text-sm mb-4">
              基于人工智能的智能助手应用，支持语音识别、自然语言处理和智能推荐
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">TensorFlow.js</span>
              <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">WebRTC</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Express.js</span>
            </div>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情 →</a>
          </div>
        </div>

        <!-- 项目卡片6 -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-300">
          <div class="h-48 bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="在线教育平台项目" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">在线教育平台</h3>
            <p class="text-gray-600 text-sm mb-4">
              提供在线课程学习、实时互动和知识付费功能的综合性教育平台
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Next.js</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Tailwind CSS</span>
              <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Socket.io</span>
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">MongoDB</span>
            </div>
            <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">查看详情 →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 其他项目部分 -->
    <section class="p-8 bg-gray-50">
      <h2 class="text-xl font-bold mb-6">开源贡献</h2>
      <div class="space-y-4">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 class="font-bold text-lg">Vue组件库</h3>
          </div>
          <p class="text-gray-600 mb-4">
            开源的Vue组件库，提供20+高质量UI组件，累计被下载超过10万次
          </p>
          <div class="flex justify-between items-center">
            <div class="flex gap-2">
              <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Vue.js</span>
              <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">TypeScript</span>
            </div>
            <a href="https://github.com/username/repo" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm font-medium">GitHub →</a>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="font-bold text-lg">前端工程化工具</h3>
          </div>
          <p class="text-gray-600 mb-4">
            前端项目脚手架工具，帮助开发者快速搭建标准化的前端项目结构
          </p>
          <div class="flex justify-between items-center">
            <div class="flex gap-2">
              <span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Node.js</span>
              <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">JavaScript</span>
            </div>
            <a href="https://github.com/username/repo" target="_blank" class="text-blue-600 hover:text-blue-800 text-sm font-medium">GitHub →</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 项目页面逻辑
</script> 