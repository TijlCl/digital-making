<template>
  <div>
    <control-panel />
    <Scene v-model="myScene" ref="scene" @keydown.native="keyHandlerDown" @complete="sceneComplete" >
          <DirectionalLight v-model="myLight" diffuse="F00" :direction="[100, -75, -100]">
            <Property name="someSceneProperty" :any="{ intensity: 0.5 }"></Property>
          </DirectionalLight>
      <Entity :position="[0,2.1,0]">
        <Asset v-model="fountain" v-if="sceneReady" :src="path" :scaling="[1, 1, 1]" >
          <Material diffuse="#000000" :metallic="0" :roughness="1"></Material>
        </Asset>
      </Entity>
      <Ground v-model="myGround" :options="{ height: 1000, width: 1000 }">
            <Material diffuse="#000000" :glossiness="0" :metallic="0" :roughness="10"></Material>
      </Ground>
      <my-camera :scene="myScene" />
    </Scene>
  </div>
</template>


<script>
import '@babylonjs/loaders';
import { Scene, Asset, Camera, Entity, Animation, DirectionalLight, PointLight, Box, Sphere, Material,SpotLight, HemisphericLight, Ground, Property} from 'vue-babylonjs';
import Fountain from "file-loader!../../public/models/fountain3.babylon"
import Test from "file-loader!../../public/models/test.babylon"
import myCamera from "./MyCamera.vue"
import SkyBox from "./SkyBox.vue"
import sceneEventModule from "../store/modules/SceneEvents"
import controlPanel from "./ControlPanel.vue"
import * as BABYLON from "@babylonjs/core"
import sky from "file-loader!../../public/sky.jpg"


export default {
  name: 'fountain-scene',
  components: { Scene, Asset, Camera, Entity, Animation, DirectionalLight, PointLight, Box, myCamera, controlPanel,SkyBox, Sphere, Material, SpotLight, HemisphericLight, Ground, Property },
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
    environment: sky,
    myMaterial: null,
    fountain: null,
    myGround: null
  }),
  beforeMount() {
    this.$store.registerModule("events", sceneEventModule);
  },
  watch: {
    fountain(newVal, oldVal) {
      var light = new BABYLON.DirectionalLight("*dir00", new BABYLON.Vector3(100, -75, -100), this.myScene);
      var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
      shadowGenerator.getShadowMap().renderList.push(this.fountain);
	    shadowGenerator.addShadowCaster(this.fountain);

	    this.myGround.receiveShadows = true;
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
}
</style>
