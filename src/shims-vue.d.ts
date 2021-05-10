/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue3-google-oauth2'
declare module '@heroicons/vue/outline'
declare module '@heroicons/vue/solid'

declare global {
  interface Window {
    gapi: any
  }
}
