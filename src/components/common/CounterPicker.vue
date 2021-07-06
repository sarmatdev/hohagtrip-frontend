<template>
  <div class="custom-number-input h-10 w-40">
    <label
      for="custom-input-number"
      class="w-full text-gray-700 text-sm font-semibold"
      >Количество гостей
    </label>
    <div
      class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1"
    >
      <button
        @click="decrement"
        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none focus:outline-none"
      >
        <base-icon class="w-5" icon="minus"></base-icon>
      </button>
      <input
        type="number"
        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
        name="custom-input-number"
        v-model="value"
      />
      <button
        @click="increment"
        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer focus:outline-none"
      >
        <base-icon class="w-5" icon="plus"></base-icon>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CounterPicker',
  props: {
    label: {
      type: String,
    },
  },
  setup() {
    const value = ref(0)

    const increment = () => {
      value.value += 1
    }
    const decrement = () => {
      value.value -= 1
    }

    return {
      value,
      increment,
      decrement,
    }
  },
})
</script>

<style lang="scss">
.counter-picker {
  @apply inline-flex flex-col;

  &__label {
    @apply block text-sm font-medium text-gray-700;
  }

  &__container {
    @apply h-10 mt-1 bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2;
  }
}
</style>
