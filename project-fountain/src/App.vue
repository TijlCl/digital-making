<template>
<v-app>
  <div id="data-app">
    <fountain-scene class="scene"/>
    <div id="loader">
      <h1 id="loader-text">Each year hundreds of students start there journey, but only a few manage to reach the top</h1>
    </div>
  </div>
</v-app>
</template>

<script>
import fountainScene from './components/scene.vue'
import { VApp } from 'vuetify/lib'
window.setTimeout(function(){
  var bgOpacity = 1;
  var TextOpacity = 0;
  var loopback = false;

function MyFadeFunction() {
   if(TextOpacity < 1) {
       TextOpacity += .075;
       if (TextOpacity > 1) {
         loopback = true
       }
       if (!loopback) {
         setTimeout(function(){MyFadeFunction()},100);
       }
   }

   if (bgOpacity>0 && TextOpacity > 0 && loopback) {
     bgOpacity -= .05;
     TextOpacity -= .03;
     setTimeout(function(){MyFadeFunction()},100);
   }

   document.getElementById('loader-text').style.opacity = TextOpacity;
   document.getElementById('loader').style.opacity = bgOpacity;
   if (bgOpacity < 0) {
    document.getElementById('loader').style.display = 'none';
   }


}

MyFadeFunction();
}, 3000);



export default {
  name: 'App',
  components: {
    fountainScene,
    VApp
  },
  data: () => ({
  }),
  methods: {
  
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
#loader-text {
  opacity: 0;
}
</style>
