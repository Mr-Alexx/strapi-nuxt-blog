<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
    <!-- 页面标题区域 -->
    <section class="p-8 border-b border-gray-100">
      <h1 class="text-3xl font-bold">联系我</h1>
      <p class="text-gray-500 mt-2">欢迎通过以下方式与我取得联系，期待与您的交流</p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
      <!-- 联系表单区域 -->
      <div class="p-8">
        <h2 class="text-xl font-bold mb-6">发送消息</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入您的姓名"
              required
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入您的邮箱地址"
              required
            />
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">主题</label>
            <input
              type="text"
              id="subject"
              v-model="form.subject"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入消息主题"
              required
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">消息内容</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="请输入您想要沟通的内容..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-300"
            :disabled="submitting"
          >
            {{ submitting ? '发送中...' : '发送消息' }}
          </button>
          
          <p v-if="formStatus" :class="[formStatus.success ? 'text-green-600' : 'text-red-600', 'text-center mt-4']">
            {{ formStatus.message }}
          </p>
        </form>
      </div>
      
      <!-- 联系信息区域 -->
      <div class="bg-gray-50 p-8">
        <h2 class="text-xl font-bold mb-6">联系方式</h2>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium text-gray-900">邮箱</h3>
              <p class="mt-1 text-gray-600">yourname@example.com</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium text-gray-900">电话</h3>
              <p class="mt-1 text-gray-600">+86 138 0000 0000</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-medium text-gray-900">地址</h3>
              <p class="mt-1 text-gray-600">四川省成都市高新区天府大道</p>
            </div>
          </div>
        </div>
        
        <!-- 社交媒体链接 -->
        <div class="mt-10">
          <h3 class="text-lg font-medium text-gray-900 mb-4">社交媒体</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" class="text-gray-500 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- 地图示例 -->
        <div class="mt-10">
          <h3 class="text-lg font-medium text-gray-900 mb-4">地理位置</h3>
          <div class="h-64 bg-gray-300 rounded-lg overflow-hidden">
            <!-- 这里可以嵌入实际的地图组件 -->
            <div class="w-full h-full flex items-center justify-center text-gray-600">
              地图将在此处显示
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// 表单数据
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// 提交状态
const submitting = ref(false);
const formStatus = ref(null);

// 提交表单
const submitForm = async () => {
  submitting.value = true;
  
  try {
    // 这里可以添加实际的表单提交逻辑，例如API调用
    // 模拟API调用延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 成功响应
    formStatus.value = {
      success: true,
      message: '消息已成功发送，我会尽快回复您！'
    };
    
    // 重置表单
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
  } catch (error) {
    // 错误处理
    formStatus.value = {
      success: false,
      message: '发送失败，请稍后再试。'
    };
    console.error('表单提交错误:', error);
  } finally {
    submitting.value = false;
    
    // 5秒后清除状态信息
    setTimeout(() => {
      formStatus.value = null;
    }, 5000);
  }
};
</script> 