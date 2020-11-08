<template>
  <div class="control-panel"> 
    <input type="button"  @click="nextCameraFrame" value="Next camera frame" />
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