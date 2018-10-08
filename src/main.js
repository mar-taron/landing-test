// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos'
// JS
import $ from 'jquery'
window.jQuery = $
window.$ = $
import 'bootstrap'
import 'popper.js'
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init({
      offset: 50,
      mirror: true,
    })
    setTimeout(function() { AOS.refresh(); }, 500);
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
