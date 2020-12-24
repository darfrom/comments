import {createApp} from 'vue'
import Index from './components/index.vue'
import i18n from './i18n'
import store from './store/index'
import ElementPlus from 'element-plus';

createApp(Index)
  .use(i18n)
  .use(store)
  .use(ElementPlus)
  .mount('#app')
