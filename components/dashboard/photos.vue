<template>
  <div class="flex flex-col border-yellow-400 border-2 rounded">
    <h1 class="text-2xl font-medium bg-yellow-400 border text-center w-full pt-2 pb-1">
      <nuxt-link to="/photos">
        {{ title }}
      </nuxt-link>
    </h1>
    <div class="content_wrapper pt-3 flex flex-row flex-wrap items-center justify-center">
      <div
        v-for="i in photos"
        :key="i.source"
      >
        <!-- Have to use require method in order for webpack to recognise the image source -->
        <img :src="i.source" class="w-32 px-2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Photos',
      photos: [{ source: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg' }, { source: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg' }, { source: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg' }, { source: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.content_wrapper {
  background-color: #C8D7F1;
  opacity: 0.7;
  height: 100%;
  overflow: hidden;
}
</style>
