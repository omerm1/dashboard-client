<template>
  <div class="page_wrapper">
    <div
      class="heading_wrapper flex flex-row"
    >
      <div class="w-56 absolute pt-10 pl-10">
        <nuxt-link to="/signin">
          <img src="~assets/images/add_picture.png">
        </nuxt-link>
      </div>
      <h1 class="flex flex-row justify-center font-semibold text-6xl text-white w-full pt-10">
        {{ title + name }}
      </h1>
    </div>
    <div class="content_wrapper flex flex-row flex-wrap justify-center mx-40 mt-8">
      <weather class="w-84 h-56 m-10" />
      <news class="w-84 h-56 m-10" />
      <sport class="w-84 h-56 m-10" />
      <photos class="w-84 h-56 m-10" />
      <tasks class="w-84 h-56 m-10" />
      <clothes class="w-84 h-56 m-10" />
    </div>
  </div>
</template>

<script>
import store from '../store'
import * as fetchData from '../api/fetchData'

import weather from '../components/dashboard/weather'
import clothes from '../components/dashboard/clothes'
import news from '../components/dashboard/news'
import photos from '../components/dashboard/photos'
import sport from '../components/dashboard/sport'
import tasks from '../components/dashboard/tasks'

export default {
  components: {
    weather,
    tasks,
    sport,
    photos,
    news,
    clothes
  },
  data () {
    return {
      title: 'Good day ',
      coords: {}
    }
  },
  computed: {
    name () {
      // If user not logged in then use John as default name
      if (!store.user.username) {
        return 'John'
      } else {
        return store.user.username
      }
    }
  },
  created () {
    // if (!store.jwtToken) {
    //   this.$router.push('/signup')
    // }
  },
  mounted () {
    const displayLocationInfo = (position) => {
      this.coords.lat = position.coords.latitude
      this.coords.lng = position.coords.longitude

      console.log(`longitude: ${this.coords.lng} | latitude: ${this.coords.lat}`)
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo)
    }
    this.requestData()
  },
  methods: {
    requestData () {
      fetchData.getWeather(this.coords.lat, this.coords.lng)
      fetchData.getSportsData()
      fetchData.getNews()
      fetchData.getClothesData()
    }
  }
}
</script>

<style>
.page_wrapper {
  height: 100vh;
  background-image: url('~assets/images/background.png');
  overflow: hidden;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
