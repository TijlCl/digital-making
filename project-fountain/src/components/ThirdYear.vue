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
      water.emissiveColor = new BABYLON.Color3.FromHexString('#447192');

       var plane = BABYLON.MeshBuilder.CreatePlane("sphere1", {}, this.scene);
       plane.position = new BABYLON.Vector3(-2.9, 7.35, 0.2);
       plane.rotation = new BABYLON.Vector3(1.57, 1.57, 0);
       plane.scaling = new BABYLON.Vector3(2.8, 3.5, 0);
       plane.material = water;
       plane.alpha = 0.5;

      //water fall
      this.particleSystem = BABYLON.ParticleHelper.CreateDefault(new BABYLON.Vector3(0, 0.5, 0));


      this.particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

      this.particleSystem.color1 = new BABYLON.Color3(0, 1, 1);
      this.particleSystem.color2 = new BABYLON.Color3.FromHexString('#447192');
      this.particleSystem.colorDead = new BABYLON.Color3.FromHexString('#89adc7');

      this.particleSystem.minSize = 0.1;
      this.particleSystem.maxSize = 0.3;

      this.particleSystem.minLifeTime = 0.1;
      this.particleSystem.maxLifeTime = 0.6;

      this.particleSystem.emitRate = 200;


      this.particleSystem.createBoxEmitter(new BABYLON.Vector3(0, -1, -0.9), new BABYLON.Vector3(0, -3, -0.7), new BABYLON.Vector3(-1.2, 7.35, -1.3), new BABYLON.Vector3(-4.7, 7.35, -1.3));

      this.particleSystem.minEmitPower = 1;
      this.particleSystem.maxEmitPower = 5;
      this.particleSystem.updateSpeed = 0.001;

      this.particleSystem.start();

      //second
      //water fall
      this.secondParticleSystem = BABYLON.ParticleHelper.CreateDefault(new BABYLON.Vector3(0, 0.5, 0));


      this.secondParticleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

      this.secondParticleSystem.color1 = new BABYLON.Color3(0, 1, 1);
      this.secondParticleSystem.color2 = new BABYLON.Color3.FromHexString('#44add4');
      this.secondParticleSystem.colorDead = new BABYLON.Color3.FromHexString('#629c98');

      this.secondParticleSystem.minSize = 0.1;
      this.secondParticleSystem.maxSize = 0.3;

      this.secondParticleSystem.minLifeTime = 0.1;
      this.secondParticleSystem.maxLifeTime = 0.2;

      this.secondParticleSystem.emitRate = 1000;


      this.secondParticleSystem.createBoxEmitter(new BABYLON.Vector3(0, -0.5, -0.9), new BABYLON.Vector3(0, -1, -0.7), new BABYLON.Vector3(-1.2, 7.35, -1.2), new BABYLON.Vector3(-4.7, 7.35, -1.2));

      this.secondParticleSystem.minEmitPower = 1;
      this.secondParticleSystem.maxEmitPower = 5;
      this.secondParticleSystem.updateSpeed = 0.001;

      this.secondParticleSystem.start();
     }
  },
  methods: {
    
  }
}
</script>
<style>