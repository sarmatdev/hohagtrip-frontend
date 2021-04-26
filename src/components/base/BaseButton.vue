<template>
  <component
    :is="rootTag"
    :to="to"
    :class="[$style.baseButton]"
    v-bind="$attrs"
  >
    <BaseLoader v-if="loading" />
    <slot v-else />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
    },
    loading: Boolean,
  },
  computed: {
    rootTag(): string {
      if (this.to) {
        return 'router-link'
      }

      return this.tag
    },
  },
})
</script>

<style module lang="scss">
.baseButton {
  min-width: 4rem;
  @apply flex items-center justify-center bg-green-500 text-white px-3 py-2 rounded-md cursor-pointer outline-none transition-colors duration-200;

  &:disabled {
    cursor: not-allowed;
    @apply bg-gray-500;
  }

  &-primary {
    @apply bg-blue-700 text-blue-100;

    &:hover {
      @apply bg-blue-800;
    }
  }
}
</style>
