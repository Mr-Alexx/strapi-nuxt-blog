<template>
  <div class="md:w-1200px m-inline-auto min-h-screen flex flex-col gap-6 md:flex-row bg-gray-100 lt-md:w-full">
    <div class="flex-1 min-w-0 mt-6 lt-md:mt-0">
      <Nav class="rounded-t-xl border-b border-b-solid border-gray-200" />
      <!-- 内容区域 -->
      <main class="md:rounded-b-xl bg-white shadow-md p4 md:p6">

        <div class="mx-auto">
          <!-- 主内容slot -->
          <slot />
        </div>
      </main>

      <!-- 页脚 -->
      <Footer />
    </div>
    <!-- 侧栏 -->
    <aside class="flex-shrink-0 w-300px rounded-xl mt-6 flex flex-col gap-6">
      <!-- 个人介绍信息 -->
      <Intro class="shadow-md max-h-95% sticky lt-md:hidden" />
    </aside>
    <!-- 回到顶部按钮 -->
    <BackTop :visibility-height="200" />
  </div>
</template>

<script setup>
const route = useRoute()

const isPostDetail = computed(() => {
  return route.path.includes('/post/')
})

const tocData = useState('layoutToc')
</script>