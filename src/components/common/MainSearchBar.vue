<template>
  <div class="main-searchbar">
    <div class="main-searchbar__container">
      <base-listbox label="Местоположение" />
      <base-datepicker label="Прибытие" />
      <base-datepicker label="Выезд" />
      <counter-picker />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CounterPicker from '@/components/common/CounterPicker.vue'

export default defineComponent({
  components: {
    CounterPicker,
  },
})
</script>

<style lang="scss">
.main-searchbar {
  @apply max-w-screen-md mt-6 m-auto;
  &__container {
    @apply flex bg-white justify-between flex-wrap	 py-8 px-4 shadow sm:rounded-lg sm:px-10;
  }
}
</style>
