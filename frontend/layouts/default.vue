<template>
  <div class="w-1080px m-inline-auto min-h-screen flex flex-col gap-6 md:flex-row bg-gray-100">
    <!-- 侧栏 -->
    <aside class="flex-shrink-0 w-300px rounded-xl mt-6 flex flex-col gap-6">
      <!-- 个人介绍信息 -->
      <Intro v-if="!isPostDetail" class="shadow-md max-h-95% sticky"/>

      <!-- 文章目录slot -->
      <ArticleToc v-else class="w-200px shadow-md" :toc="tocData" />

    </aside>

    <div class="flex-1 min-w-0 mt-6">
      <Nav class="rounded-t-xl" />
      <!-- 内容区域 -->
      <main class="rounded-b-xl bg-white shadow-md p4">
        
        <div class="mx-auto py-4">
          <!-- 主内容slot -->
          <slot />
        </div>
      </main>

      <!-- 页脚 -->
      <Footer/>
    </div>

    <!-- 回到顶部按钮 -->
    <BackTop :visibility-height="200" />
  </div>
</template>

<script setup>
const route = useRoute()

const isPostDetail = computed(() => {
  return useRoute().path.includes('/post/')
})

const tocData = useState('layoutToc')
</script>