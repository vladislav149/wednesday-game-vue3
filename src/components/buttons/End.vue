<template>
  <transition appear name="cards">
    <button @click="endGame" v-if="started" class="end">
      <img class="end__img" src="@/assets/icons/exit.svg" alt="exit" />
    </button>
  </transition>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'WedBtnEnd',
  computed: {
    ...mapGetters('firstScreen', ['started']),
    ...mapGetters('listGame', ['isGamePlayed'])
  },
  methods: {
    ...mapActions('firstScreen', ['end']),
    ...mapActions('listGame', ['endGames']),
    endGame() {
      if (this.isGamePlayed) {
        this.endGames()
      } else {
        this.end()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.end {
  position: fixed;
  text-align: center;
  top: 5%;
  right: 5%;
  width: 80px;
  height: 80px;
  z-index: 600;
}

.end__img {
  display: inline-block;
  width: 25px;
  height: 25px;
}
</style>
