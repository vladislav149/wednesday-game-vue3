<template>
  <div class="voice" v-if="voice"></div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'WedVoice',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('listGame', ['voice'])
  }
}
</script>

<style lang="scss" scoped>
.voice {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
