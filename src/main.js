import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import {defaultLocale, languages} from './i18n'
import {createI18n, useI18n} from 'vue-i18n'

const messages = Object.assign(languages)
const langLocalStorage = localStorage.getItem('lang')

const i18n = createI18n({
  legacy: false,
  locale: langLocalStorage || defaultLocale,
  fallbackLocale: 'ru',
  messages,
  globalInjection: true
})

createApp(App, {
  setup() {
    const {t} = useI18n()
    return t
  }
})
  .use(i18n)
  .use(store)
  .mount('#app')
