<template>
  <v-timeline dark dense class="timeline">
    <v-timeline-item :color="activeItem === 4 ? '#5F9EA0' : '#3f6c6e'" small @click.native.stop="clicked(4)">Graduation</v-timeline-item>
    <v-timeline-item :color="activeItem === 3 ? '#5F9EA0' : '#3f6c6e'" small @click.native.stop="clicked(3)">3rd year</v-timeline-item>
    <v-timeline-item :color="activeItem === 2 ? '#5F9EA0' : '#3f6c6e'" small @click.native.stop="clicked(2)">2nd year</v-timeline-item>
    <v-timeline-item :color="activeItem === 1 ? '#5F9EA0' : '#3f6c6e'" small @click.native.stop="clicked(1)">1st year</v-timeline-item>
    <v-timeline-item :color="activeItem === 0 ? '#5F9EA0' : '#3f6c6e'" style="padding-bottom: 24px" small @click.native.stop="clicked(0)">Start</v-timeline-item>
  </v-timeline>
</template>
<script>
import { VTimeline, VTimelineItem } from 'vuetify/lib'

export default {
  name: 'timeline',
  components: {VTimeline, VTimelineItem},
  props: {
  },
  data: () => ({
    activeItem: 0
  }),
  computed: {
  },
  watch: {
  },
  methods: {
    clicked(item) {
      this.activeItem = item;
      this.$store.commit("sceneEvents/setLevel", item);
    }
  }
}
</script>
<style>
.timeline {
    position: absolute;
    top: 25vh;
    left: 50px;
}
.v-timeline-item__dot {
   z-index: 1;
}
.v-timeline-item {
  padding-bottom: 75px;
  color: white;
}
.v-timeline-item__dot--small .v-timeline-item__inner-dot:hover {
    background-color: #5F9EA0 !important;
    border-color: #5F9EA0 !important;
}
</style>