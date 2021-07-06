<template>
  <div class="base-datepicker">
    <label class="base-datepicker__label">{{ label }}</label>
    <litepie-datepicker
      class="mt-1"
      v-model="dateValue"
      i18n="ru"
      as-single
      :formatter="formatter"
    ></litepie-datepicker>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import LitepieDatepicker from 'litepie-datepicker'

export default defineComponent({
  props: {
    label: String,
  },
  components: {
    LitepieDatepicker,
  },
  setup() {
    const dateValue = ref([])
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM',
    })

    return {
      dateValue,
      formatter,
    }
  },
})
</script>

<style lang="scss">
.base-datepicker {
  @apply flex flex-col;

  &__label {
    @apply block text-sm font-medium text-gray-700 ml-2;
  }
}
</style>
