<template>
  <video ref="video" class="video" preload="auto" loop="loop">
    <source
      src="@/assets/video/wednesday_dance.mp4"
      type='video/ogg; codecs="theora,
    vorbis"'
    />
    <source
      src="@/assets/video/wednesday_dance.mp4"
      type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
    />
    <source
      src="@/assets/video/wednesday_dance.mp4"
      type='video/webm;
    codecs="vp8, vorbis"'
    />
    Тег video не поддерживается вашим браузером.
  </video>
</template>

<script>
export default {
  name: 'WedVideo',
  methods: {
    playVideo() {
      this.$refs.video.play()
    }
  }
}
</script>

<style></style>
