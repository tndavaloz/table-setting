import Vue from 'vue'
import App from './App.vue'
import vueXlsxTable from 'vue-xlsx-table'

Vue.use(vueXlsxTable, {rABS: false})
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
