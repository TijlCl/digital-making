<template>
  <div>
    <control-panel />
    <Scene v-model="myScene" ref="scene" @keydown.native="keyHandlerDown" @complete="sceneComplete" >
          <!-- <DirectionalLight v-model="myLight" diffuse="F00" :direction="[100, -75, -100]">
            <Property name="someSceneProperty" :any="{ intensity: 0.5 }"></Property>
          </DirectionalLight> -->
      <Entity :position="[0,2.1,0]">
        <Asset v-model="fountain" v-if="sceneReady" :src="path" :scaling="[1, 1, 1]" >
        </Asset>
      </Entity>
      <Ground v-model="myGround" :options="{ height: 1000, width: 1000 }">
      </Ground>
      <my-camera :scene="myScene" />
    </Scene>
  </div>
</template>


<script>
import '@babylonjs/loaders';
import { Scene, Asset, Camera, Entity, Animation, DirectionalLight, PointLight, Box, Sphere, Material,SpotLight, HemisphericLight, Ground, Property} from 'vue-babylonjs';
import Fountain from "file-loader!../../public/models/fountain4.babylon"
import Test from "file-loader!../../public/models/test.babylon"
import myCamera from "./MyCamera.vue"
import sceneEventModule from "../store/modules/SceneEvents"
import controlPanel from "./ControlPanel.vue"
import * as BABYLON from "@babylonjs/core"


export default {
  name: 'fountain-scene',
  components: { Scene, Asset, Camera, Entity, Animation, DirectionalLight, PointLight, Box, myCamera, controlPanel, Sphere, Material, SpotLight, HemisphericLight, Ground, Property },
  mixins: [Entity],
  data: () => ({
    path: Fountain,
    testpath: Test,
    showFountain: true,
    myCamera: null,
    myLight: null,
    myScene: null,
    beta: 0,
    sceneReady: false,
    myMaterial: null,
    fountain: null,
    myGround: null,
    animatedLight: null
  }),
  computed: {
    xaxis () {
      return this.$store.getters["sceneEvents/xaxis"];
    },
    yaxis () {
      return this.$store.getters["sceneEvents/yaxis"];
    },
    zaxis () {
      return this.$store.getters["sceneEvents/zaxis"];
    }
  },
  beforeMount() {
    this.$store.registerModule("events", sceneEventModule);
  },
  watch: {
    fountain(newVal, oldVal) {
      if(oldVal === null) {
      this.animatedLight = new BABYLON.SpotLight("*spot00", new BABYLON.Vector3(-14, 20, 0), new BABYLON.Vector3(1, -1, 0), Math.PI / 3, 80, this.myScene);
      this.animatedLight.diffuse = new BABYLON.Color3(1, 0, 0);
	    this.animatedLight.specular = new BABYLON.Color3(0, 1, 0);
      }
      var shadowGenerator = new BABYLON.ShadowGenerator(1024, this.animatedLight);
      shadowGenerator.getShadowMap().renderList.push(this.fountain);
	    shadowGenerator.addShadowCaster(this.fountain);

	    this.myGround.receiveShadows = true;
    },
    xaxis(newVal) {
      this.animatedLight.position = new BABYLON.Vector3(this.yaxis, newVal, this.zaxis);
    },
    yaxis(newVal) {
      this.animatedLight.position = new BABYLON.Vector3(newVal, this.xaxis, this.zaxis);
    },
    zaxis(newVal) {
      this.animatedLight.position = new BABYLON.Vector3(this.yaxis, this.xaxis, newVal);
    }
  },
  methods: {
      sceneComplete(scene) {
        this.myScene = scene.scene;
        this.myScene.createDefaultEnvironment({
          skyboxSize: 75,
          skyboxColor: new BABYLON.Color3(),
        })
        this.sceneReady = true;
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
  font-family: Robote, Charcoal, sans-serif;
}
</style>
