import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueCodemirror from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)
Vue.use(VueCodemirror)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
