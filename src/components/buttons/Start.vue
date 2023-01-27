<template>
  <transition appear name="start">
    <button
      v-if="!started"
      :disabled="cantStart"
      class="start"
      @click="startGame"
    >
      <beat-loader v-if="cantStart" :color="'black'" :loading="true" />
      <span v-else>Старт!</span>
    </button>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
export default {
  name: 'WedBtnStart',
  components: {
    BeatLoader
  },
  data() {
    return {
      cantStart: true
    }
  },
  mounted() {
    setTimeout(() => (this.cantStart = false), 1000)
  },
  computed: {
    ...mapGetters('first', ['started'])
  },
  methods: {
    startGame() {
      this.$store.dispatch('first/start')
    }
  }
}
</script>

<style lang="scss" scoped>
.start {
  position: fixed;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(3, 162, 0);
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
