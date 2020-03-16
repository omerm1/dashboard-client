<template>
  <div class="flex flex-col border-yellow-400 border-2 rounded">
    <h1 class="text-2xl font-medium bg-yellow-400 border text-center w-full pt-2 pb-1">
      {{ title }}
    </h1>
    <div class="content_wrapper pt-3 flex flex-col items-center">
      <div class="flex flex-row mb-3">
        <img
          v-if="icon === 'clouds'"
          src="~assets/images/clouds_icon.png"
          class="w-24 h-24 mr-10"
        >
        <img
          v-else-if="icon === 'rain'"
          src="~assets/images/Rain_icon.png"
          class="w-24 h-24 mr-10"
        >
        <img
          v-else
          src="~assets/images/Sun_icon.png"
          class="w-24 h-24 mr-10"
        >
        <span class="text-2xl font-medium ml-10 text-center">
          {{ temp }}<br>
          degrees
        </span>
      </div>
      <span class="text-3xl font-semibold mt-1">
        {{ city }}
      </span>
    </div>
  </div>
</template>

<script>
import store from '../../store'

export default {
  data () {
    return {
      title: 'Weather'
    }
  },
  computed: {
    temp () {
      return store.weather.main.temp
    },
    city () {
      return store.weather.name
    },
    icon () {
      // return store.weather.weather[0].main
      return 'clouds'
    }
  }
}
</script>

<style lang="scss" scoped>
.content_wrapper {
  background-color: #C8D7F1;
  opacity: 0.7;
  height: 100%;
}
</style>
