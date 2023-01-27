<template>
  <transition appear name="cards">
    <ul v-if="started" class="cards">
      <li class="cards__card cards__card--top-left">
        <button class="cards__button cards__button--tyler"></button>
      </li>
      <li class="cards__card cards__card--top-right">
        <button class="cards__button cards__button--inid"></button>
      </li>
      <li class="cards__card cards__card--center">
        <button class="cards__button cards__button--wednesday"></button>
      </li>
      <li class="cards__card cards__card--bottom-left">
        <button class="cards__button cards__button--hunter"></button>
      </li>
      <li class="cards__card cards__card--bottom-right">
        <button class="cards__button cards__button--xavier"></button>
      </li>
    </ul>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'WedCard',
  computed: {
    ...mapGetters('first', ['started'])
  }
}
</script>

<style lang="scss" scoped>
.cards {
  display: inline;
}

.cards__card {
  position: fixed;
}

.cards__card--top-left,
.cards__card--top-right {
  top: 10%;
}

.cards__card--bottom-left,
.cards__card--bottom-right {
  bottom: 10%;
}

.cards__card--top-left,
.cards__card--bottom-left {
  left: 10%;
}

.cards__card--top-right,
.cards__card--bottom-right {
  right: 10%;
}

.cards__card--center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cards__button {
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  border: 1px solid wheat;
  background-size: cover;
}

.cards__button--wednesday {
  background-image: url('@/assets/photo/persons/wednesday.jpg');
}

.cards__button--tyler {
  background-image: url('@/assets/photo/persons/tyler.jpg');
}

.cards__button--inid {
  background-image: url('@/assets/photo/persons/inid.jpg');
}

.cards__button--hunter {
  background-image: url('@/assets/photo/persons/hunter.jpg');
}

.cards__button--xavier {
  background-image: url('@/assets/photo/persons/xavier.jpg');
}
</style>
