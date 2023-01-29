<template>
  <div>
    <WedCursor />
    <WedVideoMain />
    <WedCards />
    <WedBtnStart />
    <WedBtnEnd />
    <WedSelectLang />
    <WedVideo v-if="false" />
  </div>
</template>

<script setup>
import WedVideoMain from '@/components/VideoMain'
import WedCursor from '@/components/Cursor'
import WedBtnStart from '@/components/buttons/Start'
import WedBtnEnd from '@/components/buttons/End'
import WedCards from '@/components/Cards'
import WedSelectLang from '@/components/SelectLang'
import WedVideo from '@/components/Video'
</script>

<style lang="scss">
@import './assets/styles/styles.scss';
</style>
