<template>
  <beat-loader :color="color" :loading="loading" :size="size" class="spinner" />
</template>

<script>
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
export default {
  name: 'WedSpinner',
  components: {
    BeatLoader
  },
  props: {
    color: {
      type: String,
      default: 'burlywood'
    },
    loading: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: '50px'
    }
  }
}
</script>

<style lang="scss" scoped>
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
