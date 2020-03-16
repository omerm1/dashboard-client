<template>
  <div class="news_wrapper">
    <div class="flex flex-row justify-between absolute m-16 w-11/12">
      <h1 class="text-5xl font-semibold text-white">
        {{ title }}
      </h1>
      <button class="w-12">
        <nuxt-link to="/">
          <img src="~assets/icons/home.svg">
        </nuxt-link>
      </button>
    </div>
    <div class="mt-16 mx-64 flex flex-col items-center justify-center">
      <img :src="imageSource" class="h-96">
      <h2 class="text-4xl font-medium text-white my-6">
        {{ headline }}
      </h2>
      <p class="text-white text-lg">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      title: 'News',
      imageSource: 'https://www.gchq.gov.uk/images/gchq_poppy_air_9244.jpg'
    }
  },
  computed: {
    headline () {
      return store.news.title
    },
    content () {
      return store.news.content
    }
  }
}
</script>

<style lang="scss" scoped>
.news_wrapper {
  height: 100vh;
  background-image: url('~assets/images/background.png');
  overflow: hidden;
}
</style>
