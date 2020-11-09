<template>
  <div class="control-panel"> 
    <input type="button"  @click="nextCameraFrame" value="Next Level" />
    <input type="button"  @click="setLevel(0)" value="Go to Level 1" />
    <input type="button"  @click="setLevel(1)" value="Go to Level 2" />
    <input type="button"  @click="setLevel(2)" value="Go to Level 3" />
    <input type="button"  @click="setLevel(3)" value="Go to Level 4" />
    <input type="button"  @click="setLevel(4)" value="Go to Level 5" />
  </div>
</template>
<script>
export default {
  name: 'control-panel',
  data: () => ({
  }),
  methods: {
      debugtest() {
        debugger;
      },
      keyHandlerDown(key) {
        this.beta += 1;
      },
      nextCameraFrame() {
        this.$store.commit("sceneEvents/nextCameraFrame");
      },
      setLevel(level) {
        this.$store.commit("sceneEvents/setLevel", level);
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
<style scoped>
.control-panel {
    height: 30vh;
    width: 50vh;
    background: black;
    position: absolute;
    top: 50px;
    right: 50px;
}
</style>