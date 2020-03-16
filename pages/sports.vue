<template>
  <div class="sports_wrapper">
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
    <div class="mt-48 mx-64 flex flex-col">
      <form class="mx-auto">
        <input v-model="teamNameInput" class="text-white text-3xl" placeholder="Input Sports Team here">
      </form>
      <ul class="mt-16 ml-16 text-left list-none text-white text-lg">
        <li
          v-for="i in teamsBeaten"
          :key="i"
        >
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      title: 'Sports',
      teamNameInput: ''
    }
  },
  computed: {
    teamsBeaten () {
      store.sportsChosenTeam = this.teamNameInput
      const capitalised = this.teamNameInput.charAt(0).toUpperCase() + this.teamNameInput.slice(1)
      return store.sports[capitalised]
    }
  }
}
</script>

<style lang="scss" scoped>
.sports_wrapper {
  height: 100vh;
  background-image: url('~assets/images/background.png');
  overflow: hidden;
}

input {
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid white;
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
