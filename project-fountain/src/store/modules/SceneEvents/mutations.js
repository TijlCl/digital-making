export default {
    nextCameraFrame(state) {
        state.previousLevel = state.currentLevel
        state.currentLevel = state.lastLevel === state.currentLevel ? 0 : state.currentLevel + 1;
    },
    setLevel(state, level) {
        state.previousLevel = state.currentLevel;
        state.currentLevel = level
    },
    setXaxis(state, value) {
        state.xaxis = value;
    },
    setZaxis(state, value) {
        state.zaxis = value;
    },
    setYaxis(state, value) {
        state.yaxis = value;
    }
}