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
    beta: 0.5,
    levels: [
      {
        target: new BABYLON.Vector3(0, 0, 0),
        alpha: 0,
        beta: 0.5,
        radius: 5
      },
      {
        target: new BABYLON.Vector3(-1, 2, 0),
        alpha: 3.1028209112914573,
        beta: 1.3651935903716061,
        radius: 5
      },
      {
        target: new BABYLON.Vector3(-2, 3, 0),
        alpha: 1.5509699954515734,
        beta: 1.2499153732814252,
        radius: 6
      },
      {
        target: new BABYLON.Vector3(-3, 5, 0),
        alpha: -1.5673177603356705,
        beta: 1.0236938562492426,
        radius: 3.5
      },
      {
        target: new BABYLON.Vector3(-1.5, 7, 0),
        alpha: 1.559111989188483,
        beta: 1.3964073940352668,
        radius: 5
      },
    ]
  }),
  computed: {
    currentLevel() {
      return this.$store.getters["sceneEvents/currentLevel"];
    },
    previousLevel() {
      return this.$store.getters["sceneEvents/previousLevel"];
    }
  },
  watch: {
    currentLevel(newVal, odlVal) {
      this.animate();
    }
  },
  methods: {
    animate() {
      const currentlevel = this.levels[this.currentLevel];
      const previouslevel = this.levels[this.previousLevel];

     // Target
      var animationcameraTarget = new BABYLON.Animation(
            "myAnimationcamera", 
            "target", 
            30, 
            BABYLON.Animation.ANIMATIONTYPE_VECTOR3, 
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
 
      var targetKeys = [];
      targetKeys.push({
      frame: 0,
      value: previouslevel.target,
      })
      targetKeys.push({
      frame: 100,
      value: currentlevel.target,
      });
      animationcameraTarget.setKeys(targetKeys);

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
      value: previouslevel.alpha,
      })
      alphaKeys.push({
      frame: 100,
      value: currentlevel.alpha,
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
      value: previouslevel.beta
      })
      betaKeys.push({
      frame: 100,
      value: currentlevel.beta
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
      value: previouslevel.radius,
      })
      radiusKeys.push({
      frame: 100,
      value: currentlevel.radius
      });
      animationcameraRadius.setKeys(radiusKeys);

      // DO ANIMATIONS
      this.myCam.animations = [];
      this.myCam.animations.push(animationcameraTarget);
      this.myCam.animations.push(animationcameraAlpha);
      this.myCam.animations.push(animationcameraBeta);
      this.myCam.animations.push(animationcameraRadius);
      this.$scene.beginAnimation(this.myCam, 0, 100, false, 1);
    },
  }
}
</script>1