import Vue from 'vue'
import ToggleButton from 'vue-js-toggle-button'
import App from './App.vue'

Vue.use(ToggleButton)

new Vue({
  el: '#app',
  render: h => h(App)
})
