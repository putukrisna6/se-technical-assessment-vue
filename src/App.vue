<template>
  <div id="app">
    <FeedbackForm />
  </div>
</template>

<script>
import FeedbackForm from './components/FeedbackForm.vue'

export default {
  name: 'App',
  components: {
    FeedbackForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25%;
}
</style>
