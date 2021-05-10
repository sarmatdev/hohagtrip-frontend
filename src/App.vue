<template>
  <div>
    <Header />
    <main class="layout">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/common/Header.vue'
export default defineComponent({
  components: {
    Header,
  },
})
</script>

<style lang="scss">
.layout {
  @apply container max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen w-full pt-16 pb-4 break-words bg-gray-100;
}
</style>
