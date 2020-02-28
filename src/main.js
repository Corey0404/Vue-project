import Vue from 'vue'
import App from './App.vue'
import BuyModalComponent from '@/components/Shared/BuyModal'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import vuetify from './plugins/vuetify'

Vue.component('app-buy-modal', BuyModalComponent)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDrUnOqbBnGDxy-UujBmzoevVDqkCiYC2Y',
      authDomain: 'itc-ads-4cd89.firebaseapp.com',
      databaseURL: 'https://itc-ads-4cd89.firebaseio.com',
      projectId: 'itc-ads-4cd89',
      storageBucket: 'itc-ads-4cd89.appspot.com',
      messagingSenderId: '911127501262',
      appId: '1:911127501262:web:d27153b6d3099d99e4339f'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')
