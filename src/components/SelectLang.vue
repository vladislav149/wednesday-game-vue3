<template>
  <div class="select" v-if="!started">
    <button class="select__btn" @click="showOptions = !showOptions">
      lang - {{ $i18n.locale }}
    </button>
    <ul class="select__list" v-if="showOptions">
      <li
        class="select__option"
        v-for="(lang, key) in listLanguages"
        :key="lang"
      >
        <button class="select__option-btn" @click="changeLang(key)">
          <img
            class="select__img"
            :src="require(`@/assets/icons/flags/${key}.svg`)"
            :alt="`флаг ${key}`"
          />{{ key }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {languages} from '@/i18n'
export default {
  name: 'WedSelectLang',
  data() {
    return {
      showOptions: false
    }
  },
  computed: {
    ...mapGetters('firstScreen', ['started']),
    listLanguages() {
      return languages
    }
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
      this.showOptions = false
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: fixed;
  width: 70px;
  font-size: 20px;
  color: rgb(242, 242, 242);
  top: 10%;
  right: 10%;
  transform: translateX(10%);

  &__btn {
    margin-bottom: 20px;
  }

  &__option {
    margin-bottom: 10px;
  }

  &__option-btn {
    display: flex;
    align-items: center;
  }

  &__img {
    width: 40px;
    margin-right: 10px;
  }
}
</style>
