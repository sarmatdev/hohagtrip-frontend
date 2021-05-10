<template>
  <div class="profile">
    <ProfileSidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileSidebar from '@/components/common/ProfileSidebar.vue'
export default defineComponent({
  components: {
    ProfileSidebar,
  },
})
</script>

<style lang="scss">
.profile {
  // @apply flex;
}
</style>
