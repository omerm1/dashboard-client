<template>
  <div class="signup_wrapper">
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
    <form class="mt-64 mx-64 text-xl flex flex-col justify-center items-center text-white">
      <div class="flex flex-row justify-around flex-wrap">
        <input v-model="username" placeholder="Username" class="m-10 w-4/12">
        <input v-model="email" placeholder="Email" class="m-10 w-4/12">
        <input v-model="password" type="password" placeholder="Password" class="m-10 w-4/12">
        <input v-model="confirmPassword" type="password" placeholder="Confirm password" class="m-10 w-4/12">
      </div>
      <button class="mt-6" @click.prevent="requestSignUp">
        <img src="~assets/images/register_button.png" class="w-48">
      </button>
      <div class="mt-12">
        Already have an account? <nuxt-link to="/signin" class="underline">Login now!</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import { signUp } from '../api/auth'

export default {
  data () {
    return {
      title: 'Sign Up',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    requestSignUp () {
      signUp(this.username, this.email, this.password)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.signup_wrapper {
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
