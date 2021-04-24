<template>
  <div>
    <Header />
    <main class="container min-h-screen mx-auto w-full pt-16 pb-4 bg-gray-100">
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

<style lang="scss"></style>
