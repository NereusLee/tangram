import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// import Vant from 'vant';

import 'vant/lib/vant-css/index.css';
var VueTouch = require('vue-touch')

Vue.use(VueTouch, {name: 'v-touch'})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app');
