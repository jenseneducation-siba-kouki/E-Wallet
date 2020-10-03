import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


new Vue({
  data() {
    return{
    cards: [
        {
          vendor:"bitcoin",
          number: "1234 5678 1234 5674",
          name: "Siba Kouki",
          validThru: "10/22",
          id: 0
        },
        {
          vendor:"evil",
          number: "3241 4532 1353",
          name: "Jan Jabro",
          validThru: "6/23",
          id: 1
        },
        {
          vendor:"ninja",
          number: "3421 5643 2357 4322",
          name: "Elie Amso",
          validThru: "2/21",
          id: 2
        },
        {
          vendor:"blockchain",
          number: "3245 4223 2145 5378",
          name: "Sally Adel",
          validThru: "5/18",
          id: 3
        },
    ]
  }},
  router,
  render: h => h(App)
}).$mount('#app')
