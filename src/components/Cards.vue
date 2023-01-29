<template>
  <transition appear name="cards">
    <ul v-if="started" class="cards">
      <li class="cards__card cards__card--top-left"></li>
      <li class="cards__card cards__card--top-right"></li>
      <li class="cards__card cards__card--center"></li>
      <li class="cards__card cards__card--bottom-left"></li>
      <li class="cards__card cards__card--bottom-right"></li>
    </ul>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'WedCard',
  computed: {
    ...mapGetters('firstScreen', ['started'])
  }
}
</script>

<style lang="scss" scoped>
.cards {
  display: inline;
}

.cards__card {
  position: fixed;
  width: 20vh;
  height: 20vh;
  overflow: hidden;
  border-radius: 50%;
  z-index: 0;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
  &::before {
    content: '';
    opacity: 0;
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      transparent,
      rgba(168, 239, 255, 1),
      transparent 30%
    );
    transition: opacity 0.8s;
  }
}

.cards__card:hover::before {
  opacity: 1;
  animation: rotate 2s linear infinite;
}

.cards__card--top-left::after {
  background-image: url('@/assets/photo/persons/tyler.jpg');
}

.cards__card--top-right::after {
  background-image: url('@/assets/photo/persons/inid.jpg');
}

.cards__card--bottom-left::after {
  background-image: url('@/assets/photo/persons/hunter.jpg');
}

.cards__card--bottom-right::after {
  background-image: url('@/assets/photo/persons/xavier.jpg');
}

.cards__card--center::after {
  background-image: url('@/assets/photo/persons/wednesday.jpg');
}

.cards__card--top-left,
.cards__card--top-right {
  top: 10%;
  transform: translateY(-10%);
}

.cards__card--bottom-left,
.cards__card--bottom-right {
  transform: translateY(10%);
  bottom: 10%;
}

.cards__card--top-left,
.cards__card--bottom-left {
  transform: translateX(-10%);
  left: 10%;
}

.cards__card--top-right,
.cards__card--bottom-right {
  transform: translateX(10%);
  right: 10%;
}

.cards__card--center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
</style>
