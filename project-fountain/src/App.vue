<template>
<v-app>
  <div id="data-app">
    <fountain-scene />
  </div>
</v-app>
</template>

<script>
import fountainScene from './components/scene.vue'
import { VApp } from 'vuetify/lib'
export default {
  name: 'App',
  components: {
    fountainScene,
    VApp
  }
}
</script>
