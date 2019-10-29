import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false
Vue.component('panel', Panel)
sync(store, router)
Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
