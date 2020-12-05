<template>
<v-app>
  <div id="data-app">
    <fountain-scene class="scene" :start="appStarted"/>
    <div id="loader">
      <h1 id="loader-text">Each year hundreds of students start there journey, but only a few manage to reach the top</h1>
      <v-btn @click="start()" id="start-btn" outlined rounded color="white">Start</v-btn>
    </div>
  </div>
</v-app>
</template>

<script>
import { VBtn } from 'vuetify/lib'

import fountainScene from './components/scene.vue'
import { VApp } from 'vuetify/lib'
window.setTimeout(function(){
  var bgOpacity = 1;
  var TextOpacity = 0;
  var BtnOpacity = 0;
  var loopback = false;

function MyFadeFunction() {
   if(TextOpacity < 1 || BtnOpacity < 1) {
       TextOpacity += .075;
       if (TextOpacity > 1) {
         BtnOpacity += .075;
       }
       if (!loopback) {
       }
   }

   if (window.appStarted === true) {
     bgOpacity -= .05;
     TextOpacity -= .03;
     TextOpacity -= .05;
   }

   document.getElementById('loader-text').style.opacity = TextOpacity;
   document.getElementById('start-btn').style.opacity = BtnOpacity;
   document.getElementById('loader').style.opacity = bgOpacity;
   if (bgOpacity < 0) {
    document.getElementById('loader').style.display = 'none';
   }
   if (window.appStarted === false || TextOpacity > 0 || BtnOpacity > 0 || bgOpacity > 0) {
    setTimeout(function(){MyFadeFunction()},100);
   }
}

MyFadeFunction();
}, 3000);



export default {
  name: 'App',
  components: {
    fountainScene,
    VApp,
    VBtn
  },
  data: () => ({
    appStarted: false
  }),
  created() {
    window.appStarted = false;
  },
  methods: {
    start() {
      this.appStarted = true;
      window.appStarted = true;
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

#loader {
  height: 100vh;
  width: 100vw;
  background-color: rgb(6, 0, 20);
  position: absolute;
  top: 0;
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 70px 0;
  z-index: 10;
}
#start-btn {
  position: absolute;
  top: 70vh;
  left: 48vw;
  opacity: 0;
}
#loader-text {
  opacity: 0;
}
</style>
