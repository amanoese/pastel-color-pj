import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRouter from 'vue-router'
import ToggleButton from 'vue-js-toggle-button'
import App from './App.vue'
import Top from './Top.vue'

Vue.use(VueRouter)
Vue.use(ToggleButton)
Vue.use(VueGoogleMaps, {
  installComponents: true,
  load: {
    key: 'google api key',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

Vue.filter('json', x => JSON.stringify(x));

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう
const router = new VueRouter({
  routes : [
    { path: '/', component: Top }
  ] // `routes: routes` の短縮表記
})

// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch: {
    '$route'(to, from) {
      // Call resizePreserveCenter() on all maps
      Vue.$gmapDefaultResizeBus.$emit('resize')
    }
  }
})
