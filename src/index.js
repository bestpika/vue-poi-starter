import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hackPlugin from './plugins/hack'

import './bootstrap.js'
import hackMixin from './mixins/hack'

Vue.use(hackPlugin)
Vue.mixin(hackMixin)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  components: {},
  render: h => h(App)
})
