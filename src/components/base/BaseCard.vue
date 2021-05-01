<template>
  <figure class="card">
    <div class="card__header">
      <h2>
        <slot name="header" />
      </h2>
    </div>
    <div class="card__body">
      <slot />
    </div>
    <div class="card__footer">
      <slot name="footer" />
    </div>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss">
.card {
  @apply bg-white w-96 shadow-xl rounded;

  &__header {
    @apply text-3xl font-medium border-b-2 p-3;
  }

  &__body {
    @apply p-3;
  }

  &__footer {
    @apply border-t-2 p-3;
  }
}
</style>
