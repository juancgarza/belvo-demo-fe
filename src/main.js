import Vue from 'vue'
import App from './App.vue'
import './assets/index.css'
import LineChart from './components/LineChart'
import '@belvo/belvo-vue-components/dist/vue-components/belvo-vue-components.css'
import BelvoComponentsPlugin from '@belvo/belvo-vue-components'
import router from './router'

Vue.use(BelvoComponentsPlugin)
Vue.component('LineChart',LineChart)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
