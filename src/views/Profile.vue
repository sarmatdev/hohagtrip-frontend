<template>
  <div class="profile">
    <ul>
      <li v-for="(item, i) in user" :key="i">{{ item }}</li>
    </ul>
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

<style></style>
