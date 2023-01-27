<template>
  <transition appear name="cards">
    <button @click="endGame" v-if="started" class="end">
      <img class="end__img" src="@/assets/icons/exit.svg" alt="exit" />
    </button>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'WedBtnEnd',
  computed: {
    ...mapGetters('first', ['started'])
  },
  methods: {
    endGame() {
      this.$store.dispatch('first/end')
    }
  }
}
</script>

<style lang="scss" scoped>
.end {
  position: fixed;
  top: 5%;
  right: 5%;
  width: 50px;
  height: 50px;
}

.end__img {
  width: 25px;
  height: 25px;
}
</style>
