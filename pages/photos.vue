<template>
  <div class="photos_wrapper flex flex-col items-center">
    <h1 class="text-5xl font-semibold text-white text-center mt-16">
      {{ title }}
    </h1>
    <div class="flex flex-row flex-wrap justify-around w-7/12 mt-16">
      <img class="m-6 w-71" src="https://www.gchq.gov.uk/images/gchq_poppy_air_9244.jpg">
      <upload-image
        is="upload-image"
        :url="forms.create.url"
        :max_files="5"
        name="files[]"
        :resize_enabled="true"
        :resize_max_width="640"
        :button_html="forms.create.confirm"
        :button_class="'button is-primary'"
        @upload-image-attemp="uploadImageAttempt"
        @upload-image-success="uploadImageSuccess"
        @upload-image-failure="uploadImageFailure"
        @upload-image-loaded="uploadImageLoaded"
        @upload-image-submit="uploadImageSubmit"
        @upload-image-clicked="uploadImageClicked"
        @upload-image-removed="uploadImageRemoved"
      />
    </div>
  </div>
</template>

<script>
import UploadImage from 'vue-upload-image'

export default {
  components: {
    UploadImage
  },
  data () {
    return {
      title: 'Photos',
      headline: 'Lorem Ipsum is not simply ra',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      imageSource: 'https://www.gchq.gov.uk/images/gchq_poppy_air_9244.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.photos_wrapper {
  height: 100vh;
  background-image: url('~assets/images/background.png');
  overflow: hidden;
}
</style>
