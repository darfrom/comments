import {createApp} from 'vue'
import Index from './components/index.vue'
import i18n from './i18n'
import store from './store/index'

createApp(Index)
  .use(i18n)
  .use(store)
  .mount('#app')
