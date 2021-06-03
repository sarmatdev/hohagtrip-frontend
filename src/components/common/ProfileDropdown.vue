<template>
  <button
    class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
  >
    <span class="sr-only">View notifications</span>
    <BellIcon class="h-6 w-6" aria-hidden="true" />
  </button>
  <Menu as="div" class="ml-3 relative">
    <div>
      <MenuButton
        class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
      >
        <img class="h-8 w-8 rounded-full" :src="user.image" alt="" />
        <span class="hidden ml-3 text-gray-700 text-sm font-medium lg:block"
          ><span class="sr-only">Open user menu for </span>{{ fullName }}</span
        >
        <ChevronDownIcon
          class="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
          aria-hidden="true"
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-slot="{ active }">
          <router-link
            to="/profile"
            :class="[
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700',
            ]"
            >Профиль</router-link
          >
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <button
            @click="logout"
            :class="[
              active ? 'bg-gray-100' : '',
              'block w-full text-left px-4 py-2 text-sm text-gray-700',
            ]"
          >
            Выход
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent, ref, inject } from 'vue'
import { useStore } from 'vuex'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, ChevronDownIcon } from '@heroicons/vue/outline'

export default defineComponent({
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    ChevronDownIcon,
  },
  setup() {
    const store = useStore()
    const open = ref(false)
    const Vue3GoogleOauth = inject('Vue3GoogleOauth')

    return {
      store,
      open,
      Vue3GoogleOauth,
    }
  },
  computed: {
    user() {
      // @ts-ignore
      return this.store.getters['auth/user']
    },
    fullName() {
      // @ts-ignore
      return `${this.user.firstName} ${this.user.lastName}`
    },
  },
  methods: {
    async logout() {
      // @ts-ignore
      await this.$gAuth.signOut()
      // @ts-ignore
      this.store.dispatch('auth/logout')
    },
  },
})
</script>

<style></style>
