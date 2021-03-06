<template>
  <Disclosure
    as="nav"
    class="bg-white shadow fixed w-full z-40"
    v-slot="{ open }"
  >
    <div class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/">
              <img
                class="h-8 w-auto"
                height="32px"
                width="40px"
                src="@/assets/images/logo.svg"
                alt="Hohagtrip logo"
              />
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#"
              class="border-green-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Жильё
            </a>
            <a
              href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Туры
            </a>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <ProfileDropdown v-if="isAuth" />
          <base-button v-else to="/login">Вход</base-button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <a
          href="#"
          class="bg-green-50 border-green-500 text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Жильё</a
        >
        <a
          href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Туры</a
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ref, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import ProfileDropdown from './ProfileDropdown.vue'

export default defineComponent({
  components: {
    ProfileDropdown,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    const store = useStore()
    const open = ref(false)

    return {
      store,
      open,
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
})
</script>
