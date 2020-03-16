<template>
  <div class="tasks_wrapper">
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
    <div class="mt-64 mx-64 flex flex-col text-white text-xl">
      <div
        v-for="task in tasks"
        :key="task.title"
        class="flex flex-row justify-center"
      >
        <label>
          <input v-model="task.content" placeholder=" " class="w-8/12">
          <span class="text-white">{{ task.title }}</span>
        </label>
        <div>
          <img v-if="task.completed" src="~assets/icons/completed.svg" class="w-10">
          <img v-else src="~assets/icons/uncompleted.svg" class="w-10">
        </div>
      </div>
    </div>
    <div class="mx-64 mt-12">
      <button class="w-12">
        <img src="~assets/images/Plus_button.png">
      </button>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      title: 'Tasks'
    }
  },
  computed: {
    tasks () {
      return store.tasks
    }
  }
}
</script>

<style lang="scss" scoped>
.tasks_wrapper {
  height: 100vh;
  background-image: url('~assets/images/background.png');
  overflow: hidden;
}
label {
  margin:20px 0;
  position:relative;
  display:inline-block;
}

span {
  padding:10px;
  pointer-events: none;
  position:absolute;
  left:0;
  top:0;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity:0.5;
}

input {
  padding:10px;
  background: transparent;
  border-bottom: 1px solid white;
}

input:focus + span, input:not(:placeholder-shown) + span {
  opacity:1;
  transform: scale(0.75) translateY(-100%) translateX(-30px);
}

/* For IE Browsers*/
input:focus + span, input:not(:-ms-input-placeholder) + span {
  opacity:1;
  transform: scale(0.75) translateY(-100%) translateX(-30px);
}

// Placeholder color change
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}
</style>
