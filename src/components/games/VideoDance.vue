<template>
  <wed-spinner
    v-if="isShowVideo"
    :color="'burlywood'"
    :loading="!isReady"
    :size="'3vw'"
  />
  <WedVideo
    v-if="isShowVideo"
    @suspend.once="show"
    @ended="showVideo(false)"
    ref="video"
    :src="'wednesday_dance.mp4'"
    class="wedvideo"
  />
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'WedDance',
  data() {
    return {
      isReady: false
    }
  },
  computed: {
    ...mapGetters('listGame', ['isShowVideo', 'isGamePlayed'])
  },
  methods: {
    ...mapActions('listGame', ['showVideo']),
    show() {
      this.isReady = true
      this.$refs.video.play()
    }
  }
}
</script>

<style lang="scss" scoped>
.wedvideo {
  position: fixed;
  left: 0;
  top: 0;
}
</style>
