<template>
  <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="@/assets/images/logo.svg"
        alt="Workflow"
      />
      <h2 class="mt-6 mb-6 text-center text-3xl font-bold text-gray-900">
        Войдите в свой аккаунт
      </h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div>
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Войдите с помощью
              </span>
            </div>
          </div>

          <div class="mt-6">
            <base-button
              @click="handleClickSignIn"
              :disabled="
                !Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized
              "
              class="w-full"
              color="red"
              >google</base-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent, inject } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  methods: {
    async handleClickSignIn() {
      try {
        // @ts-ignore
        const googleUser = await this.$gAuth.signIn()
        if (!googleUser) {
          return null
        }
        console.log(googleUser.getAuthResponse())
        const { id_token: idToken } = googleUser.getAuthResponse()
        this.store.dispatch('auth/googleAuth', idToken).then(() => {
          this.$router.push('/profile')
        })
      } catch (error) {
        //on fail do something
        console.error(error)
        return null
      }
    },
  },
  setup() {
    const store = useStore()
    const Vue3GoogleOauth = inject('Vue3GoogleOauth')
    return {
      Vue3GoogleOauth,
      store,
    }
  },
})
</script>

<style></style>
