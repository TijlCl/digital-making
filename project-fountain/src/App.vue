<template>
  <div id="app">
    <fountain-scene />
  </div>
</template>

<script>
import fountainScene from './components/scene.vue'

export default {
  name: 'App',
  components: {
    fountainScene 
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
  margin-top: 60px;
}
</style>
