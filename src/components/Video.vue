<template>
  <video ref="video" class="video" preload="auto" loop="loop">
    <source
      src="@/assets/video/Wednesday.mp4"
      type='video/ogg; codecs="theora,
    vorbis"'
    />
    <source
      src="@/assets/video/Wednesday.mp4"
      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    />
    <source
      src="@/assets/video/Wednesday.mp4"
      type='video/webm;
    codecs="vp8, vorbis"'
    />
    Тег video не поддерживается вашим браузером.
  </video>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'WedVideo',
  computed: {
    ...mapGetters('firstScreen', ['started'])
  },
  mounted() {
    const video = this.$refs.video
    video.onsuspend = () => this.$store.dispatch('firstScreen/ready')
  },
  watch: {
    started() {
      if (this.started) {
        this.$refs.video.play()
        document.documentElement.requestFullscreen()
      } else {
        this.$refs.video.pause()
        this.$refs.video.currentTime = 0
        document.exitFullscreen()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
video::-webkit-media-controls {
  display: none !important;
}

.video {
  display: block;
  max-height: 100vh;
  width: 100%;
}
</style>
