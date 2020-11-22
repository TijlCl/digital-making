<template>
  
</template>
<script>
import * as BABYLON from "@babylonjs/core"
import { Camera, Entity, Animation, Key} from 'vue-babylonjs';
import particles from "../../public/p3.json"

export default {
  name: 'particles',
  mixins: [Entity],
  components: {},
  props: {
    scene: Object,
    ground: Object
  },
  data: () => ({
    myParticles: particles
  }),
  computed: {
  },
  watch: {
    scene (newVal, oldVal){
      var particleSystem = BABYLON.ParticleHelper.CreateDefault(new BABYLON.Vector3(0, 0.5, 0));

    //Texture of each particle
    // particleSystem.particleTexture = new BABYLON.Texture("textures/flare.png", scene);

    // Where the particles come from
    particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.76, 0.86, 0.96);
    particleSystem.color2 = new BABYLON.Color4(0.51, 0.66, 0.89);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.2;
    particleSystem.maxSize = 0.6;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.1;
    particleSystem.maxLifeTime = 0.3;

    // Emission rate
    particleSystem.emitRate = 600;


    /******* Emission Space ********/
    particleSystem.createBoxEmitter(new BABYLON.Vector3(0, 1, 0), new BABYLON.Vector3(0, 8, 0), new BABYLON.Vector3(4, 0, 6), new BABYLON.Vector3(-8, 0, -6));


    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.updateSpeed = 0.001;

    // Start the particle system
    particleSystem.start();
    }
  },
  // onScene({ name, position, scene }) {
  //   let system = BABYLON.ParticleSystem.Parse(this.myParticles, this.scene, "");
  // },
}
</script>