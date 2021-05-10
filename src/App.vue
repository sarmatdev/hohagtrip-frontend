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
  @apply container min-h-screen px-4 md:px-0 mx-auto w-full pt-16 pb-4 break-words bg-gray-100;
}
</style>
