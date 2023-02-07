<template>
  <div class="quiz" v-if="quiz">
    <!-- @suspend="$refs.audio.play()" -->
    <audio
      ref="audio"
      :src="require('@/assets/audio/wednesday-main-titles.mp3')"
      loop
    ></audio>
    <div
      v-if="activeQuestion > questions.length"
      @click="showQuiz(false)"
      class="quiz__result"
    >
      <div @click.stop="" class="quiz__result-content">
        Ваш результат - {{ countCorrectNumber }}/{{ questions.length }}
      </div>
    </div>
    <div
      class="quiz__container"
      v-for="question in questions"
      :key="question.id"
    >
      <div v-if="question.id === activeQuestion" class="quiz__content">
        <transition name="question" appear>
          <h3 class="quiz__question">{{ question.text }}</h3>
        </transition>
        <div class="d-flex w-100 jc-sb">
          <div class="quiz__answer f-d-column jc-sb">
            <div>
              <transition-group name="answer-list" appear @enter="enter">
                <button
                  v-for="answer in question.answers"
                  :key="answer.id"
                  :class="{
                    'quiz__btn--right':
                      answer.isCorrectAnswer && showCorrectAnswer,
                    'quiz__btn--wrong':
                      !answer.isCorrectAnswer && showCorrectAnswer
                  }"
                  :data-index="answer.id + 1"
                  @click="answered(answer.isCorrectAnswer)"
                  class="d-flex quiz__btn w-100"
                >
                  <div class="quiz__number-answer">{{ answer.id }}</div>
                  <div class="t-a-left">{{ answer.text }}</div>
                </button>
              </transition-group>
            </div>
            <button
              v-if="showCorrectAnswer"
              @click="activeQuestion++, (showCorrectAnswer = false)"
              class="quiz__next"
            >
              Далее
            </button>
          </div>
          <transition name="img" appear>
            <img
              class="quiz__image"
              :src="require(`@/assets/photo/quiz/${question.id}.webp`)"
              alt="wednesday"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'WedQuiz',
  data() {
    return {
      activeQuestion: 1,
      showCorrectAnswer: false,
      countCorrectNumber: 0,
      questions: [
        {
          id: 1,
          text: 'Почему Мортиша и Гомес Аддамс решают отдать Уэнсдэй в Академию Nevermore?',
          answers: [
            {id: 1, text: 'Это лучшая школа в городе', isCorrectAnswer: false},
            {id: 2, text: 'Они сами там учились', isCorrectAnswer: true},
            {
              id: 3,
              text: 'Это единственная школа, куда ее приняли',
              isCorrectAnswer: false
            }
          ]
        },
        {
          id: 2,
          text: 'Как зовут директрису Академии?',
          answers: [
            {id: 1, text: 'Лариса Уимс', isCorrectAnswer: true},
            {id: 2, text: 'Энид Синклер', isCorrectAnswer: false},
            {id: 3, text: 'Мэрилин Торнхилл', isCorrectAnswer: false}
          ]
        },
        {
          id: 3,
          text: 'Ты наверняка помнишь тот самый танец Уэнсдэй. Как назывался бал, на котором она его исполнила?',
          answers: [
            {id: 1, text: 'Осенний бал', isCorrectAnswer: false},
            {id: 2, text: 'Мрачный бал', isCorrectAnswer: false},
            {id: 3, text: 'Вороний бал', isCorrectAnswer: true}
          ]
        },
        {
          id: 4,
          text: 'Что в финале сериала Ксавье Торп подарил Уэнсдэй?',
          answers: [
            {id: 1, text: 'Телефон', isCorrectAnswer: true},
            {id: 2, text: 'Платье', isCorrectAnswer: false},
            {id: 3, text: 'Шоколад', isCorrectAnswer: false}
          ]
        },
        {
          id: 5,
          text: 'Что Уэнсдэй ответила Энид Синклер, когда та предложила ей «попытать себя в общении»?',
          answers: [
            {id: 1, text: '«Это настоящая пытка»', isCorrectAnswer: false},
            {id: 2, text: '«Я люблю просто пытать»', isCorrectAnswer: true},
            {id: 3, text: '«Ненавижу общение»', isCorrectAnswer: false}
          ]
        },
        {
          id: 6,
          text: 'Как называется элитное общество Академии, которое собирается в библиотеке?',
          answers: [
            {id: 1, text: '«Белладонна»', isCorrectAnswer: true},
            {id: 2, text: '«Белый лотос»', isCorrectAnswer: false},
            {id: 3, text: '«Бальзамин»', isCorrectAnswer: false}
          ]
        },
        {
          id: 7,
          text: 'Какой силой обладает Ксавье Торп?',
          answers: [
            {
              id: 1,
              text: 'Воплощает свои рисунки в жизнь',
              isCorrectAnswer: true
            },
            {id: 2, text: 'Меняет облик', isCorrectAnswer: false},
            {
              id: 3,
              text: 'Управляет пчелами',
              isCorrectAnswer: false
            }
          ]
        },
        {
          id: 8,
          text: 'Как называется общежитие, в котором живет Уэнсдэй?',
          answers: [
            {id: 1, text: '«Амелия»', isCorrectAnswer: false},
            {id: 2, text: '«Офелия»', isCorrectAnswer: true},
            {id: 3, text: '«Гамелия»', isCorrectAnswer: false}
          ]
        },
        {
          id: 9,
          text: 'За что Уэнсдэй Аддамс исключили из прошлой школы?',
          answers: [
            {
              id: 1,
              text: 'Бросила живых пираний в бассейн во время тренировки по водному поло',
              isCorrectAnswer: true
            },
            {
              id: 2,
              text: 'Запустила разъяренных пчел в кабинет директора',
              isCorrectAnswer: false
            },
            {id: 3, text: 'Подожгла школу', isCorrectAnswer: false}
          ]
        },
        {
          id: 10,
          text: 'Какая деталь помогла Уэнсдэй распутать дело о монстре?',
          answers: [
            {id: 1, text: 'Желтый плащ', isCorrectAnswer: false},
            {id: 2, text: 'Черный зонт', isCorrectAnswer: false},
            {id: 3, text: 'Красные ботинки', isCorrectAnswer: true}
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters('listGame', ['quiz']),
    isCorrectAnswer() {
      return {
        'quiz__btn--right': this.answer.isCorrectAnswer,
        'quiz__btn--wrong': !this.answer.isCorrectAnswer
      }
    }
  },
  methods: {
    ...mapActions('listGame', ['showQuiz']),
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        pointerEvents: 'all',
        delay: el.dataset.index * 1.5,
        onComplete: done
      })
    },
    answered(isCorrect) {
      this.showCorrectAnswer = true
      isCorrect ? this.countCorrectNumber++ : false
    }
  }
}
</script>

<style lang="scss" scoped>
.quiz {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1f1d3e;
}
.quiz__container {
  padding: 0 10vw;
}

.quiz__image {
  object-fit: contain;
  object-position: center top;
  height: 60vh;
  width: fit-content;
}

.quiz__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
}

.quiz__question {
  font-size: 50px;
  color: burlywood;
  text-align: center;
}

.quiz__answer {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 20px;
  font-size: 30px;
  color: burlywood;
}

.quiz__btn {
  transform: translateX(30%);
  opacity: 0;
  border: 1px solid;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
  pointer-events: none;
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    background-color: burlywood;
    color: black;
  }
}
.quiz__btn--right,
.quiz__btn--wrong {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: -60px;
    top: 50%;
    transform: translateY(-50%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 40px;
    height: 40px;
  }
}
.quiz__btn--right {
  &::before {
    background-image: url('@/assets/icons/answer/correct.svg');
  }
}

.quiz__btn--wrong {
  &::before {
    background-image: url('@/assets/icons/answer/wrong.svg');
  }
}

.quiz__number-answer {
  margin-right: 15px;
}

.question-enter-active {
  animation: questionIn 2s;
}

.quiz__next {
  border: 1px solid;
  padding: 10px;
  &:hover {
    background-color: burlywood;
    color: black;
  }
}

.img-enter-active {
  animation: imgIn 3s;
}

.quiz__result {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.quiz__result-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  color: burlywood;
}

@keyframes questionIn {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  80% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes imgIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
