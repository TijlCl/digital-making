<template>
  <div>
    <control-panel />
    <Scene v-model="myScene" ref="scene" @keydown.native="keyHandlerDown" @scene="sceneReady = true">
      <PointLight v-if="sceneReady" :position="[0,10,0]" specular="#FF0000"></PointLight>
      <Asset v-if="sceneReady" :src="path" :scaling="[1, 1, 1]" >
      </Asset>
      <my-camera v-if="sceneReady" :scene="myScene" />
    </Scene>
  </div>
</template>


<script>
import '@babylonjs/loaders';
import { Scene, Asset, Camera, Entity, Animation, DirectionalLight, PointLight, Box} from 'vue-babylonjs';
import Fountain from "file-loader!../../public/models/fountain-no-lights.babylon"
import Test from "file-loader!../../public/models/test.babylon"
import myCamera from "./MyCamera.vue"
import sceneEventModule from "../store/modules/SceneEvents"
import controlPanel from "./ControlPanel.vue"


export default {
  name: 'fountain-scene',
  components: { Scene, Asset, Camera, Entity, Animation, DirectionalLight, PointLight, Box, myCamera, controlPanel },
  mixins: [Entity],
  data: () => ({
    path: Fountain,
    testpath: Test,
    showFountain: true,
    myCamera: null,
    myLight: null,
    myScene: null,
    beta: 0,
    sceneReady: true
  }),
  beforeMount() {
    this.$store.registerModule("events", sceneEventModule);
  },
  methods: {
      debugtest() {
        debugger;
      },
      keyHandlerDown(key) {
        this.beta += 1;
      }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
</style>
