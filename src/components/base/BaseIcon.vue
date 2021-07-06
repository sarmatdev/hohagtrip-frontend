<template>
  <component v-bind="$attrs" :is="name" class="inline" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as Icons from '@heroicons/vue/outline'
import { camelCase, upperFirst } from 'lodash-es'
export default defineComponent({
  name: 'BaseIcon',
  components: {
    ...Icons,
  },
  props: {
    icon: String,
  },
  computed: {
    name(): string {
      return `${upperFirst(camelCase(this.icon))}Icon`
    },
  },
})
</script>

<style></style>
