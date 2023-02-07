<template>
  <WedVideo
    @suspend.once="ready"
    ref="video"
    :src="'Wednesday.mp4'"
    :loop="true"
  />
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'WedVideoMain',
  computed: {
    ...mapGetters('firstScreen', ['started']),
    ...mapGetters('listGame', ['isGamePlayed'])
  },
  methods: {
    ...mapActions('firstScreen', ['ready'])
  },
  watch: {
    started() {
      if (this.started) {
        this.$refs.video.playAndFullscreen()
      } else {
        this.$refs.video.stopAndExit()
      }
    },
    isGamePlayed() {
      if (!this.isGamePlayed) {
        this.$refs.video.play()
      } else {
        this.$refs.video.stop()
      }
    }
  }
}
</script>
