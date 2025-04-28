<template>
  <svg v-if="icon === 'arrow-up'" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-rotate"><g id="&amp;#229;&amp;#177;&amp;#149;&amp;#229;&amp;#188;&amp;#128;"><path id="&amp;#232;&amp;#183;&amp;#175;&amp;#229;&amp;#190;&amp;#132;" fill-rule="evenodd" clip-rule="evenodd" d="M5.99854 7.93206L10.0644 3.86619C10.162 3.76856 10.3203 3.76856 10.418 3.86619L10.7715 4.21975C10.8691 4.31738 10.8691 4.47567 10.7715 4.5733L6.35209 8.99272C6.15683 9.18798 5.84025 9.18798 5.64498 8.99272L1.22557 4.5733C1.12794 4.47567 1.12794 4.31738 1.22557 4.21975L1.57912 3.86619C1.67675 3.76856 1.83504 3.76856 1.93267 3.86619L5.99854 7.93206Z" fill="#8A919F"></path></g></svg>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>
