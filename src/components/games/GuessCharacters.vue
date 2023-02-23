<template>
  <div class="guess" v-if="guessCharacters">
    <audio
      @suspend.once="$refs.audio.play()"
      ref="audio"
      :src="require('@/assets/audio/devious_plan.mp3')"
      loop
    ></audio>
    <img
      v-if="showingSlider === 0"
      @click="showingSlider++"
      class="main-img"
      src="@/assets/photo/characters/main.jpg"
      alt="главная"
    />
    <ul v-else class="w-100 h-100" @click="showAnswerOrNextSlide">
      <li v-for="slider in sliders" :key="slider.id" class="p-relative">
        <div v-if="slider.id === showingSlider" class="p-absolute w-100 h-100">
          <img
            :src="require(`@/assets/photo/characters/${slider.id}.png`)"
            class="p-absolute p-e-none"
            alt=""
          />
          <img
            :src="require(`@/assets/photo/characters/${slider.id}a.png`)"
            :class="{'img-guessed': guessed}"
            class="p-absolute img-no-guessed p-e-none"
            alt=""
          />
          <div :class="{'slider-show-name': guessed}" class="slider-name">
            {{ slider.name }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'WedGuessCharacters',
  data() {
    return {
      showingSlider: 0,
      guessed: false,
      sliders: [
        {
          id: 1,
          name: 'Ларч'
        },
        {
          id: 2,
          name: 'Пагсли Аддамс'
        },
        {
          id: 3,
          name: 'Аджакс Петрополис'
        },
        {
          id: 4,
          name: 'Бьянка Барклай'
        },
        {
          id: 5,
          name: 'Валери Кинботт'
        },
        {
          id: 6,
          name: 'Гомес Аддамс'
        },
        {
          id: 7,
          name: 'Гуди Аддамс'
        },
        {
          id: 8,
          name: 'Джозеф Крэкстоун'
        },
        {
          id: 9,
          name: 'Донован Галпин'
        },
        {
          id: 10,
          name: 'Йоко Танака'
        },
        {
          id: 11,
          name: 'Ксавье Торп'
        },
        {
          id: 12,
          name: 'Лариса Уимс'
        },
        {
          id: 13,
          name: 'Мэрилин Торнхилл'
        },
        {
          id: 14,
          name: 'Тайлер Галпин'
        },
        {
          id: 15,
          name: 'Фестер Аддамс'
        },
        {
          id: 16,
          name: 'Юджин Отингер'
        },
        {
          id: 17,
          name: 'Уэнсдей Аддамс'
        },
        {
          id: 18,
          name: 'Мортиша Аддамс'
        },
        {
          id: 19,
          name: 'Энид Синклер'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('listGame', ['guessCharacters'])
  },
  methods: {
    ...mapActions('listGame', ['showGuessCharacters']),
    showAnswerOrNextSlide() {
      if (this.guessed && this.showingSlider === this.sliders.length) {
        return this.showGuessCharacters(false)
      }
      if (this.guessed) {
        this.showingSlider++
        this.guessed = false
      } else {
        this.guessed = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.guess {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1f1d3e;
  background-image: url('@/assets/icons/answer/question_mark.svg');
  background-size: 60px;
}

.img-no-guessed {
  opacity: 0;
  transition: opacity 2s;
}

.img-guessed {
  opacity: 1;
}

.slider-name {
  position: fixed;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  transition: bottom 1.5s;
  background-color: #767676;
  padding: 15px 30px;
  border-radius: 20px;
  font-size: 50px;
  color: white;
}

.slider-show-name {
  bottom: 10%;
}
</style>
