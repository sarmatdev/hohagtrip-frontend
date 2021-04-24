<template>
  <header class="header">
    <img class="header__logo" src="@/assets/images/logo.svg" alt="Logo" />
    <h1 class="header__title">Hohagtrip</h1>
  </header>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">
.header {
  @apply w-full h-16 flex items-center px-3 py-1 fixed shadow bg-white;

  &__logo {
    @apply mr-4;
  }

  &__title {
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @apply text-3xl bg-gradient-to-r from-green-400 to-blue-500;
  }
}
</style>
