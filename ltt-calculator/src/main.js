import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCurrencyInput from 'vue-currency-input'

Vue.config.productionTip = false
const pluginOptions = {
  /* see config reference */
  globalOptions: { currency: 'CAD', }
}
Vue.use(VueCurrencyInput, pluginOptions)

new Vue({
  vuetify,
  el: "#wp-vue-app",
  render: h => h(App)
}).$mount('#wp-vue-app')

