import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'


Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAiIW16_oNBlv1lRA1iIq-Lilmqn3O2v5E',
      authDomain: 'meetup-app-7ddc9.firebaseapp.com',
      databaseURL: 'https://meetup-app-7ddc9.firebaseio.com',
      projectId: 'meetup-app-7ddc9',
      storageBucket: 'gs://meetup-app-7ddc9.appspot.com',
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })

    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
