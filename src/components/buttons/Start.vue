<template>
  <transition appear name="start">
    <button
      v-if="!started"
      :disabled="!isReady"
      class="start"
      @click="startGame"
    >
      <beat-loader v-if="!isReady" :color="'black'" :loading="true" />
      <span v-else>{{ $t('start') }}!</span>
    </button>
  </transition>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
export default {
  name: 'WedBtnStart',
  components: {
    BeatLoader
  },
  computed: {
    ...mapGetters('firstScreen', ['started', 'isReady'])
  },
  methods: {
    ...mapActions('firstScreen', {startGame: 'start'})
  }
}
</script>

<style lang="scss" scoped>
.start {
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #03a200;
  padding: 10px 15px;
  border-radius: 20px;
}

.start-leave-active {
  animation: startIn 2s;
}

@keyframes startIn {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
