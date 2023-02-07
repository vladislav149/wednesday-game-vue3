<template>
  <WedVideo
    v-if="isShowVideo"
    @suspend.once="$refs.video.play()"
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
  computed: {
    ...mapGetters('listGame', ['isShowVideo', 'isGamePlayed'])
  },
  methods: {
    ...mapActions('listGame', ['showVideo'])
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
