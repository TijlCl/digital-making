<template>

</template>
<script>
import * as BABYLON from "@babylonjs/core";
import waterT from "../../public/water-texture.jpg"

export default {
  name: 'third-year',
  components: {},
  props: {
    scene: Object
  },
  data: () => ({
    particleSystem: null,
    secondParticleSystem: null,
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
       plane.position = new BABYLON.Vector3(-2.9, 7.35, 0.2);
       plane.rotation = new BABYLON.Vector3(1.57, 1.57, 0);
       plane.scaling = new BABYLON.Vector3(2.8, 3.5, 0);
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
      this.particleSystem.minSize = 0.1;
      this.particleSystem.maxSize = 0.3;

      // Life time of each particle (random between...
      this.particleSystem.minLifeTime = 0.1;
      this.particleSystem.maxLifeTime = 0.6;

      // Emission rate
      this.particleSystem.emitRate = 1000;


      /******* Emission Space ********/
      this.particleSystem.createBoxEmitter(new BABYLON.Vector3(0, -1, -0.9), new BABYLON.Vector3(0, -3, -0.7), new BABYLON.Vector3(-1.2, 7.35, -1.3), new BABYLON.Vector3(-4.7, 7.35, -1.3));

      // Speed
      this.particleSystem.minEmitPower = 1;
      this.particleSystem.maxEmitPower = 5;
      this.particleSystem.updateSpeed = 0.001;

      // Start the particle system
      this.particleSystem.start();

      //second
      //water fall
      this.secondParticleSystem = BABYLON.ParticleHelper.CreateDefault(new BABYLON.Vector3(0, 0.5, 0));

      //Texture of each particle
      // particleSystem.particleTexture = new BABYLON.Texture("textures/flare.png", scene);

      // Where the particles come from
      this.secondParticleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

      // Colors of all particles
      this.secondParticleSystem.color1 = new BABYLON.Color3(0, 1, 1);
      this.secondParticleSystem.color2 = new BABYLON.Color3.FromHexString('#44add4');
      this.secondParticleSystem.colorDead = new BABYLON.Color3.FromHexString('#629c98');

      // Size of each particle (random between...
      this.secondParticleSystem.minSize = 0.1;
      this.secondParticleSystem.maxSize = 0.3;

      // Life time of each particle (random between...
      this.secondParticleSystem.minLifeTime = 0.1;
      this.secondParticleSystem.maxLifeTime = 0.2;

      // Emission rate
      this.secondParticleSystem.emitRate = 2000;


      /******* Emission Space ********/
      this.secondParticleSystem.createBoxEmitter(new BABYLON.Vector3(0, -0.5, -0.9), new BABYLON.Vector3(0, -1, -0.7), new BABYLON.Vector3(-1.2, 7.35, -1.2), new BABYLON.Vector3(-4.7, 7.35, -1.2));

      // Speed
      this.secondParticleSystem.minEmitPower = 1;
      this.secondParticleSystem.maxEmitPower = 5;
      this.secondParticleSystem.updateSpeed = 0.001;

      // Start the particle system
      this.secondParticleSystem.start();
     }
  },
  methods: {
    
  }
}
</script>
<style>