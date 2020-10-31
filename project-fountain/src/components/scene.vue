<template>
<Scene>
  <Asset :src="path" :scaling="[0.5, 0.5, 0.5]" :position="[-1, -7.25, -0.5]" :rotation="[0, Math.PI, 0]"></Asset>
</Scene>
</template>
<script>
import '@babylonjs/loaders';
import { Scene, Asset } from 'vue-babylonjs';
import Fountain from "file-loader!../../public/models/fountain.babylon"
export default {
  name: 'fountain-scene',
  components: { Scene, Asset },
  data: () => ({
    path: Fountain
  })
}
</script>

<style scoped>
</style>
