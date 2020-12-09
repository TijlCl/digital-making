<template>
<v-app>
  <div id="data-app">
    <div class="noise"></div>
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
   if(window.appStarted === false && (TextOpacity < 1 || BtnOpacity < 1)) {
       TextOpacity += .075;
       if (TextOpacity > .5) {
         BtnOpacity += .075;
       }
   }

   if (window.appStarted === true) {
    //  bgOpacity -= .05;
     TextOpacity -= .1;
     BtnOpacity -= .1;
   }

   if (window.appStarted === true && BtnOpacity < 0 && TextOpacity < 0) {
     bgOpacity -= .05;
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

.noise {
  position: fixed;
    z-index: 50;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: transparent url('../public/noise.png') repeat 0 0;
    background-repeat: repeat;
    animation: bg-animation .2s infinite;
    opacity: .30;
    visibility: visible;
    overflow-x: hidden;
    overflow-y: hidden;
    pointer-events: none;

    animation: noise .2s infinite;
    

}
@keyframes noise{
  0%{transform:translate(0)}
  10%{transform:translate(-5%,-5%)}
  20%{transform:translate(-10%,5%)}
  40%{transform:translate(-5%,15%)}
  60%{transform:translate(15%)}
  70%{transform:translateY(10%)}
  80%{transform:translate(-15%)}
  to{transform:translate(5%)}}
</style>
