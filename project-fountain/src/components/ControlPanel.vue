<template>
  <div class="control-panel"> 
    <v-expansion-panels>
      <v-expansion-panel :key="1">
        <v-expansion-panel-header class="camera-color">
          CAMERA PANEL
          <template v-slot:actions>
            <v-icon>
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="camera-color">
          <v-btn block elevation="10" color="#51acad" @click="nextCameraFrame" >
            NEXT PLATFORM
          </v-btn>
          <div class="row">
            <v-btn block @click="setLevel(0)" tile color="#51acad">PLATFORM 1</v-btn>
            <v-btn block @click="setLevel(1)" tile color="#51acad">PLATFORM 2</v-btn>
            <v-btn block @click="setLevel(2)" tile color="#51acad">PLATFORM 3</v-btn>
            <v-btn block @click="setLevel(3)" tile color="#51acad">PLATFORM 4</v-btn>
            <v-btn block @click="setLevel(4)" tile color="#51acad">PLATFORM 5</v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel :key="2">
        <v-expansion-panel-header class="camera-color">
          CAMERA PANEL
          <template v-slot:actions>
            <v-icon>
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="camera-color">
            <v-slider
            v-model="xaxis"
              max="100"
              thumb-label="always"
              min="20"
            ></v-slider>
            <v-slider
            v-model="yaxis"
              max="10"
              thumb-label="always"
              min="-40"
            ></v-slider>
            <v-slider
            v-model="zaxis"
              max="100"
              thumb-label="always"
              min="-100"
            ></v-slider>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import { VBtn, VExpansionPanels, VExpansionPanel, VExpansionPanelHeader, VExpansionPanelContent, VIcon, VExpansionPanelIcon, VSlider } from 'vuetify/lib'


export default {
  name: 'control-panel',
  components: { VBtn, VExpansionPanels, VExpansionPanel, VExpansionPanelHeader, VExpansionPanelContent, VIcon, VSlider },
  data: () => ({
  }),
  computed: {
    xaxis: {
      get () {
        return this.$store.getters["sceneEvents/xaxis"];
      }, 
      set(val) {
        this.$store.commit("sceneEvents/setXaxis", val);
      }
    },
    yaxis: {
      get () {
        return this.$store.getters["sceneEvents/yaxis"];
      }, 
      set(val) {
        this.$store.commit("sceneEvents/setYaxis", val);
      }
    },
    zaxis: {
      get () {
        return this.$store.getters["sceneEvents/zaxis"];
      }, 
      set(val) {
        this.$store.commit("sceneEvents/setZaxis", val);
      }
    }
  },
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
<style>
.control-panel {
    width: 50vh;
    background: black;
    opacity: 0.5;
    position: absolute;
    top: 50px;
    right: 50px;
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 12px;
}
.camera-color {
  background-color: cadetblue;
  color: white !important;
}
.v-btn {
  color: white !important;
}
</style>