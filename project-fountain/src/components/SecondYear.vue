<template>

</template>
<script>
import * as BABYLON from "@babylonjs/core";
import waterT from "../../public/water-texture.jpg"

export default {
  name: 'second-year',
  components: {},
  props: {
    scene: Object
  },
  data: () => ({
    particleSystem: null
  }),
  computed: {
  },
  watch: {
    scene (newVal, oldVal){
      //water
      var water = new BABYLON.StandardMaterial("grass1", this.scene);
      water.emissiveTexture = new BABYLON.Texture(waterT, this.scene);
      water.emissiveColor = new BABYLON.Color3.FromHexString('#C2F970');

       var plane = BABYLON.MeshBuilder.CreatePlane("sphere1", {}, this.scene);
       plane.position = new BABYLON.Vector3(-2, 5.75, 2.3);
       plane.rotation = new BABYLON.Vector3(1.57, 1.6, 0);
       plane.scaling = new BABYLON.Vector3(3, 3.5, 0);
       plane.material = water;
       plane.alpha = 0.5;

      //water fall
      this.particleSystem = BABYLON.ParticleHelper.CreateDefault(new BABYLON.Vector3(0, 0.5, 0));


      this.particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

      this.particleSystem.color1 = new BABYLON.Color3(0, 1, 1);
      this.particleSystem.color2 = new BABYLON.Color3.FromHexString('#C2F970');
      this.particleSystem.colorDead = new BABYLON.Color3.FromHexString('#d1f2a0');

      this.particleSystem.minSize = 0.2;
      this.particleSystem.maxSize = 0.4;

      this.particleSystem.minLifeTime = 0.1;
      this.particleSystem.maxLifeTime = 0.5;

      this.particleSystem.emitRate = 1000;


      this.particleSystem.createBoxEmitter(new BABYLON.Vector3(0, -1, 0.5), new BABYLON.Vector3(0, -3, 0.3), new BABYLON.Vector3(-0.3, 5.75, 3.8), new BABYLON.Vector3(-3.7, 5.75, 3.8));

      this.particleSystem.minEmitPower = 1;
      this.particleSystem.maxEmitPower = 5;
      this.particleSystem.updateSpeed = 0.001;

      this.particleSystem.start();
     }
  },
  methods: {
    
  }
}
</script>
<style>