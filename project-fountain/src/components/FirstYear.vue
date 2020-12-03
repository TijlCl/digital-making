<template>

</template>
<script>
import * as BABYLON from "@babylonjs/core";
import waterT from "../../public/water-texture.jpg"

export default {
  name: 'first-year',
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
      water.emissiveColor = new BABYLON.Color3(0, 1, 1);

      //emissive texture 
       var plane = BABYLON.MeshBuilder.CreatePlane("sphere1", {}, this.scene);
       plane.position = new BABYLON.Vector3(-2.5, 4.2, 0);
       plane.rotation = new BABYLON.Vector3(1.57, 0, 0);
       plane.scaling = new BABYLON.Vector3(3.1, 4, 0);
       plane.material = water;
       plane.alpha = 0.5;

      //water fall
      this.particleSystem = BABYLON.ParticleHelper.CreateDefault(new BABYLON.Vector3(0, 0.5, 0));

      //Texture of each particle
      // particleSystem.particleTexture = new BABYLON.Texture("textures/flare.png", scene);

      // Where the particles come from
      this.particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

      // Colors of all particles
      this.particleSystem.color1 = new BABYLON.Color3(0, 1, 1);
      this.particleSystem.color2 = new BABYLON.Color3.FromHexString('#44add4');
      this.particleSystem.colorDead = new BABYLON.Color3.FromHexString('#629c98');

      // Size of each particle (random between...
      this.particleSystem.minSize = 0.4;
      this.particleSystem.maxSize = 0.6;

      // Life time of each particle (random between...
      this.particleSystem.minLifeTime = 0.1;
      this.particleSystem.maxLifeTime = 0.3;

      // Emission rate
      this.particleSystem.emitRate = 3000;


      /******* Emission Space ********/
      this.particleSystem.createBoxEmitter(new BABYLON.Vector3(-0.5, -1, 0), new BABYLON.Vector3(-0.3, -3, 0), new BABYLON.Vector3(-4.1, 4.18, -1.9), new BABYLON.Vector3(-4.1, 4.18, 1.9));
      // this.particleSystem.createBoxEmitter(new BABYLON.Vector3(0, 1, 0), new BABYLON.Vector3(0, 1, 0), new BABYLON.Vector3(0, 0, -0.5), new BABYLON.Vector3(0, 0, 0.5));
      this.particleSystem.position = new BABYLON.Vector3(0, 10, 0);

      // Speed
      this.particleSystem.minEmitPower = 1;
      this.particleSystem.maxEmitPower = 5;
      this.particleSystem.updateSpeed = 0.001;

      // Start the particle system
      this.particleSystem.start();
     }
  },
  methods: {
    
  }
}
</script>
<style>