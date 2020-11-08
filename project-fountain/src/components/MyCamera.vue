<template>
<Entity>
  <Camera type="arcRotate" v-model="myCam" :target="camPos" :alpha="alpha" :radius="radius" :beta="beta">
  </Camera>
</Entity>
</template>
<script>
import { Camera, Entity, Animation, Key} from 'vue-babylonjs';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import * as BABYLON from "@babylonjs/core"

export default {
  name: 'my-camera',
  components: {Camera, Entity, Animation, Key},
  mixins: [Entity],
  props: {
    scene: Object
  },
  data: () => ({
    myCam: null,
    cameraAnimation: null,
    camPos: [0, 0, 0],
    alpha: 0,
    radius: 5,
    beta: 0.5
  }),
  computed: {
    cameraFrame() {
      return this.$store.getters["sceneEvents/currentCameraFrame"];
    }
  },
  watch: {
    myCam(newVal, odlVal) {
    },
    cameraFrame(newVal, odlVal) {
      this.animate();
    }
  },
  methods: {
    animate() {
      this.camPos = [-1, 2, 0];
      // this.alpha = 3.1028209112914573;
      // this.beta = 1.3651935903716061;
      // this.radius = 4.6;
      // ALPHA
      var animationcameraAlpha = new BABYLON.Animation(
            "myAnimationcamera", 
            "alpha", 
            30, 
            BABYLON.Animation.ANIMATIONTYPE_FLOAT, 
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
 
      var alphaKeys = [];
      alphaKeys.push({
      frame: 0,
      value: this.alpha,
      })
      alphaKeys.push({
      frame: 100,
      value: 3.1028209112914573,
      });
      animationcameraAlpha.setKeys(alphaKeys);

      // BETHA
      var animationcameraBeta = new BABYLON.Animation(
            "myAnimationcamera", 
            "beta", 
            30, 
            BABYLON.Animation.ANIMATIONTYPE_FLOAT, 
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
      var betaKeys = [];
      betaKeys.push({
      frame: 0,
      value: this.beta
      })
      betaKeys.push({
      frame: 100,
      value: 1.3651935903716061
      });
      animationcameraBeta.setKeys(betaKeys);

      // RADIUS
      var animationcameraRadius = new BABYLON.Animation(
            "myAnimationcamera", 
            "radius", 
            30, 
            BABYLON.Animation.ANIMATIONTYPE_FLOAT, 
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
      var radiusKeys = [];
      radiusKeys.push({
      frame: 0,
      value: this.radius,
      })
      radiusKeys.push({
      frame: 100,
      value: 4.6
      });
      animationcameraRadius.setKeys(radiusKeys);
         
      this.myCam.animations = [];
      this.myCam.animations.push(animationcameraAlpha);
      this.myCam.animations.push(animationcameraBeta);
      this.myCam.animations.push(animationcameraRadius);
      this.$scene.beginAnimation(this.myCam, 0, 100, false, 1);
    },
  }
}
</script>1