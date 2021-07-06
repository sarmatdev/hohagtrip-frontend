<template>
  <div class="home">
    <MainSearchBar />
    <div class="max-w-7xl mx-auto">
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <AdCard v-for="post in posts" :ad="post" :key="post.title" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AdCard from '@/components/common/AdCard.vue'
import MainSearchBar from '@/components/common/MainSearchBar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    AdCard,
    MainSearchBar,
  },
  setup() {
    const posts = [
      {
        title: 'Boost your conversion rate',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        imageUrl:
          'https://a0.muscache.com/im/pictures/77ff7343-acef-46e0-9c96-727182dc8d9b.jpg?im_w=720',
      },
    ]
    return {
      posts,
    }
  },
})
</script>
