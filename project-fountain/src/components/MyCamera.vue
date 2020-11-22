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
    camPos: [0, 3, 0],
    alpha: -0.683541238900989,
    radius: 75,
    beta: 1.3922062182845616,
    // test: setTimeout(this.test(), 2000),
    levels: [
      {
        target: new BABYLON.Vector3(0, 3, 0),
        alpha: 0.006527343750000002,
        beta: 1.0936957457483611,
        radius: 5
      },
      {
        target: new BABYLON.Vector3(0, 3, 0),
        alpha: 3.141552325768091,
        beta: 1.089769943338719,
        radius: 7.3806202442978766
      },
      {
        target: new BABYLON.Vector3(-2, 5, 0),
        alpha: 1.5567992412104268,
        beta: 1.2499153732814252,
        radius: 7.162916214740841
      },
      {
        target: new BABYLON.Vector3(-3, 7, 0),
        alpha: -1.591422484462345,
        beta: 0.8398498613338736,
        radius: 4.118716058228563
      },
      {
        target: new BABYLON.Vector3(-1.5, 9, 0),
        alpha: 1.559111989188483,
        beta: 1.3964073940352668,
        radius: 5
      },
    ]
  }),
  created() {
    setTimeout(this.test, 4500)
  },
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
      debugger;
      this.animate();
    },
    myCam(newVal, odlVal) {
      if(odlVal === null) {
        this.myCam.upperBetaLimit = 1.50079632679;
        this.myCam.upperRadiusLimit = 75;
        this.myCam.lowerRadiusLimit = 2;
        this.myCam.wheelPrecision = 50;
      }
    }
  },
  methods: {
    test() {
      this.animate(-0.8848044749348015, 1.4211137192475227, 21.61858576698921, new BABYLON.Vector3(0, 3, 0))
    },
    animate(alpha, beta, radius, target) {
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
      value: this.myCam.target,
      })
      targetKeys.push({
      frame: 100,
      value: target ?? currentlevel.target,
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
      value: this.myCam.alpha,
      })
      alphaKeys.push({
      frame: 100,
      value: alpha ?? currentlevel.alpha,
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
      value: this.myCam.beta
      })
      betaKeys.push({
      frame: 100,
      value: beta ?? currentlevel.beta
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
      value: this.myCam.radius,
      })
      radiusKeys.push({
      frame: 100,
      value: radius ?? currentlevel.radius
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