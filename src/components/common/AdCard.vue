<template>
  <figure class="ad-card">
    <div class="flex-shrink-0">
      <img
        class="ad-card__image"
        :src="ad.imageUrl"
        :alt="`${ad.title} image`"
      />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div>
        <p>
          4.5
          <span class="text-gray-400">(20 отзывов)</span>
        </p>
        <p class="ad-card__title">
          {{ ad.title }}
        </p>
        <p class="ad-card__description">
          {{ ad.description }}
        </p>
      </div>
    </div>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AdCard',
  props: {
    ad: {
      type: Object,
    },
  },
})
</script>

<style lang="scss">
.ad-card {
  @apply flex flex-col max-w-sm rounded-lg shadow-lg overflow-hidden;

  &__image {
    @apply h-48 w-full object-cover;
  }

  &__title {
    @apply text-xl font-semibold text-gray-900;
  }

  &__description {
    @apply mt-3 text-base text-gray-500;
  }
}
</style>
