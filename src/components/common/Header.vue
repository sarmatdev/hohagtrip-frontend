<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <img class="logo__image" src="@/assets/images/logo.svg" alt="Logo" />
        <h1 class="logo__title">Hohagtrip</h1>
      </div>
    </router-link>

    <base-button to="/login" v-if="!isAuth">Вход</base-button>

    <div class="user-nav" v-else>
      <p class="user-nav__name">{{ user.firstName }}</p>
      <router-link to="/profile">
        <img class="user-nav__image" :src="user.image" />
      </router-link>
      <base-button @click="logout">выход</base-button>
    </div>
  </header>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Header',
  setup() {
    const store = useStore()
    console.log('store', store)

    return {
      store,
    }
  },
  computed: {
    user() {
      // @ts-ignore
      return this.store.getters['auth/user']
    },
    isAuth() {
      // @ts-ignore
      return this.store.getters['auth/isAuth']
    },
  },
  methods: {
    logout() {
      this.store.dispatch('auth/logout')
    },
  },
})
</script>

<style lang="scss">
.header {
  @apply w-full h-16 flex items-center justify-between px-8 py-1 fixed shadow bg-white;

  .logo {
    @apply flex items-center;

    &__image {
      @apply mr-4;
    }

    &__title {
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @apply text-3xl bg-gradient-to-r from-green-400 to-blue-500;
    }
  }

  .user-nav {
    @apply flex items-center;
    &__name {
      @apply mr-4;
    }

    &__image {
      @apply h-12 rounded-full;
    }
  }
}
</style>
