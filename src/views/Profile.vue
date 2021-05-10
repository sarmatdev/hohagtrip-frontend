<template>
  <div class="profile">
    <aside class="navbar">navbar</aside>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
    }
  },
  computed: {
    user() {
      // @ts-ignore
      return this.store.getters['auth/user']
    },
  },
})
</script>

<style lang="scss">
.profile {
  .navbar {
    @apply text-gray-800;
  }
}
</style>
