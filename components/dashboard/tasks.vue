<template>
  <div class="flex flex-col border-yellow-400 border-2 rounded">
    <h1 class="text-2xl font-medium bg-yellow-400 border text-center w-full pt-2 pb-1">
      <nuxt-link to="/tasks">
        {{ title }}
      </nuxt-link>
    </h1>
    <div class="content_wrapper pt-3 flex flex-col items-center">
      <div
        v-for="task in tasks"
        :key="task.title"
        class="flex flex-row jusify-between my-2"
      >
        <span class="text-lg font-semibold ml-6 w-48 underline">
          {{ task.title }}
        </span>
        <img
          v-if="task.completed"
          src="~assets/icons/completed.svg"
          class="w-8 h-8 mr-6"
        >
        <img
          v-else
          src="~assets/icons/uncompleted.svg"
          class="w-8 h-8 mr-6"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Tasks',
      tasks: [
        {
          title: 'task1',
          completed: false
        },
        {
          title: 'task1',
          completed: false
        },
        {
          title: 'task1',
          completed: false
        }
      ]
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
