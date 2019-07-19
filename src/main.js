import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

/* Vue.use(Vuetify, {
  theme: {
    primary: '#D32F2F',
    accent: '#FF5252',
    secondary: '#BDBDBD',
    info: '#1E88E5',
    warning: '#FFA000',
    error: '#D50000',
    success: '#66BB6A'
  }
}) */


/* import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1,
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
}) */


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
