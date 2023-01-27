<template>
  <div>
    <wed-cursor />
    <wed-video />
    <wed-cards />
    <wed-btn-start />
    <wed-btn-end />
  </div>
</template>

<script>
import WedVideo from '@/components/Video'
import WedCursor from '@/components/Cursor'
import WedBtnStart from '@/components/buttons/Start'
import WedBtnEnd from '@/components/buttons/End'
import WedCards from '@/components/Cards'
export default {
  name: 'App',
  components: {
    WedVideo,
    WedCursor,
    WedBtnStart,
    WedBtnEnd,
    WedCards
  }
}
</script>

<style lang="scss">
@import './assets/styles/styles.scss';
</style>
