import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';
import store from './store';
import './registerServiceWorker';
// import Vant from 'vant';

import 'vant/lib/vant-css/index.css';
let VueTouch = require('vue-touch');

Vue.use(VueTouch, { name: 'v-touch' });

Vue.config.productionTip = false;

export function createApp() {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: (h: any) => h(App)
  });
  return { app, router, store };
}

