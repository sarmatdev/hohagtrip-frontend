<template>
  <div>
    <div>
      <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
      <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
      <h2 v-if="user">signed user: {{ user }}</h2>
      <base-button
        @click="handleClickSignIn"
        :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
      >
        sign in
      </base-button>
      <base-button
        @click="handleClickGetAuthCode"
        :disabled="!Vue3GoogleOauth.isInit"
      >
        get authCode
      </base-button>
      <base-button
        @click="handleClickSignOut"
        :disabled="!Vue3GoogleOauth.isAuthorized"
      >
        sign out
      </base-button>
      <base-button
        @click="handleClickDisconnect"
        :disabled="!Vue3GoogleOauth.isAuthorized"
      >
        disconnect
      </base-button>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineComponent, inject } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  data() {
    return {
      user: '',
    }
  },
  methods: {
    async handleClickSignIn() {
      try {
        // @ts-ignore
        const googleUser = await this.$gAuth.signIn()
        if (!googleUser) {
          return null
        }
        this.user = googleUser.getBasicProfile().getEmail()
        console.log(googleUser.getAuthResponse())
        const { id_token: idToken } = googleUser.getAuthResponse()
        this.store.dispatch('auth/googleAuth', idToken)
      } catch (error) {
        //on fail do something
        console.error(error)
        return null
      }
    },
    async handleClickGetAuthCode() {
      try {
        // @ts-ignore
        const authCode = await this.$gAuth.getAuthCode()
        console.log('authCode', authCode)
      } catch (error) {
        //on fail do something
        console.error(error)
        return null
      }
    },
    async handleClickSignOut() {
      try {
        // @ts-ignore
        await this.$gAuth.signOut()
        // @ts-ignore
        console.log('isAuthorized', this.Vue3GoogleOauth.isAuthorized)
        this.user = ''
      } catch (error) {
        console.error(error)
      }
    },
    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`
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
