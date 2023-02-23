<template>
  <div>
    <WedDance />
    <WedQuiz />
    <WedGuessCharacters />
    <WedVoice />
    <transition appear name="cards">
      <ul v-if="started && !isGamePlayed" class="cards">
        <li
          v-for="game in listGames"
          :key="game.id"
          :class="[game.class, {played: game.isPlayed}]"
          @click="game.game(), (game.isPlayed = true)"
          class="cards__card"
        ></li>
      </ul>
    </transition>
  </div>
</template>

<script>
import WedDance from '@/components/games/VideoDance'
import WedQuiz from '@/components/games/Quiz'
import WedGuessCharacters from '@/components/games/GuessCharacters'
import WedVoice from '@/components/games/Voice'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'WedCard',
  data() {
    return {
      listGames: [
        // {
        //   id: 1,
        //   class: 'cards__card--top-left',
        //   isPlayed: false,
        //   game: () => console.log(1)
        // },
        {
          id: 2,
          class: 'cards__card--top-right',
          isPlayed: false,
          game: () => this.showVoice(true)
        },
        {
          id: 3,
          // class: 'cards__card--center',
          class: 'cards__card--top-left',
          isPlayed: false,
          game: () => this.showVideo(true)
        },
        {
          id: 4,
          class: 'cards__card--bottom-left',
          isPlayed: false,
          game: () => this.showQuiz(true)
        },
        {
          id: 5,
          class: 'cards__card--bottom-right',
          isPlayed: false,
          game: () => this.showGuessCharacters(true)
        }
      ]
    }
  },
  components: {WedDance, WedQuiz, WedGuessCharacters, WedVoice},
  computed: {
    ...mapGetters('firstScreen', ['started']),
    ...mapGetters('listGame', ['isGamePlayed'])
  },
  methods: {
    ...mapActions('listGame', [
      'showVideo',
      'showQuiz',
      'showGuessCharacters',
      'showVoice'
    ])
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

// .cards__card--top-left::after {
//   background-image: url('@/assets/photo/persons/tyler.jpg');
// }

.cards__card--top-right::after {
  background-image: url('@/assets/photo/persons/inid.jpg');
}

.cards__card--bottom-left::after {
  background-image: url('@/assets/photo/persons/hunter.jpg');
}

.cards__card--bottom-right::after {
  background-image: url('@/assets/photo/persons/xavier.jpg');
}

// .cards__card--center::after {
.cards__card--top-left::after {
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

.played {
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: transparent;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    opacity: 1;
    background-image: url('@/assets/icons/exit.svg');
    background-size: contain;
  }
  &:hover::before {
    animation: none;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
</style>
