<template>
  <video ref="video" class="video" preload="auto" :loop="loop">
    <source
      :src="require(`@/assets/video/${src}`)"
      type='video/ogg; codecs="theora,
    vorbis"'
    />
    <source
      :src="require(`@/assets/video/${src}`)"
      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    />
    <source
      :src="require(`@/assets/video/${src}`)"
      type='video/webm;
    codecs="vp8, vorbis"'
    />
    Тег video не поддерживается вашим браузером.
  </video>
</template>

<script>
export default {
  name: 'WedVideo',
  props: {
    src: {
      type: String,
      required: true
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    play() {
      this.$refs.video.play()
    },
    playAndFullscreen() {
      this.play()
      document.documentElement.requestFullscreen()
    },
    stop() {
      this.$refs.video.pause()
      this.$refs.video.currentTime = 0
    },
    stopAndExit() {
      this.stop()
      document.exitFullscreen()
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
