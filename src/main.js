import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import StarIcon from 'vue-material-design-icons/Star.vue'
import StarOutline from 'vue-material-design-icons/StarOutline'
import CheckboxMarked from 'vue-material-design-icons/CheckboxMarked'
import CheckboxBlank from 'vue-material-design-icons/CheckboxBlank.vue'
import DragHorizontal from 'vue-material-design-icons/DragHorizontal.vue'
import api from './api'
import './css/normalize.css'
import './css/grid.css'
import './css/decorators.css'

Vue.prototype.$http = api

Vue.config.productionTip = false

Vue.component('star-icon', StarIcon)
Vue.component('star-outline-icon', StarOutline)
Vue.component('checkbox-blank-icon', CheckboxBlank)
Vue.component('checkbox-marked-icon', CheckboxMarked)
Vue.component('drag-horizontal-icon', DragHorizontal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
