<template>
  <div class="article-content prose prose-slate max-w-none">
    <slot></slot>
  </div>
</template>

<script setup>
// 文章内容组件，将通过插槽接收内容
</script>

<style scoped>
.article-content :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
  scroll-margin-top: 100px;
}

.article-content :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  scroll-margin-top: 100px;
}

.article-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.article-content :deep(li) {
  margin-bottom: 0.5rem;
}

.article-content :deep(img) {
  margin: 1.5rem 0;
  max-width: 100%;
  height: auto;
  border-radius: 0.375rem;
}

.article-content :deep(a) {
  color: #3b82f6;
  text-decoration: none;
}

.article-content :deep(a:hover) {
  text-decoration: underline;
}

.article-content :deep(blockquote) {
  margin: 1.5rem 0;
  padding: 0.75rem 1.5rem;
  border-left: 4px solid #e2e8f0;
  background-color: #f8fafc;
  font-style: italic;
}

.article-content :deep(pre) {
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: #1e293b;
  color: #e2e8f0;
  overflow-x: auto;
}

.article-content :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875em;
}
</style> 