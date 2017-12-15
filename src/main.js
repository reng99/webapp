// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import requestUrl from './sense/requestUrl.js'
import testimony from './sense/testimony.js'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueImg from 'v-img'
import cookie from './sense/cookie.js'
// import vmodal from 'vue-js-modal'
import VueScroller from 'vue-scroller'
import VueClipboard from 'vue-clipboard2'
import axios from './sense/axios'
import {whandww} from './data/data'
// import VueLazyload
import VueLazyload from 'vue-lazyload'

import swal from 'sweetalert'

import plugin from './sense/plugin'


Vue.prototype.whandww = whandww;
Vue.config.productionTip = false


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.debug = true;
axios.defaults.withCredentials=true;
Vue.prototype.$ajax = axios
//use custom directive
Vue.use(VueLazyload)
Vue.use(requestUrl);
Vue.use(testimony);
Vue.use(VueAwesomeSwiper);
Vue.use(VueImg);
Vue.use(cookie);
Vue.use(VueScroller);
// Vue.use(vmodal)
Vue.use(VueClipboard);
Vue.use(plugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  swal,
  template: '<App/>',
  components: { App }
})
