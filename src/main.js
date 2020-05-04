import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Qwixx from './components/Qwixx'
import HomePage from './components/HomePage'
import Rules from "./components/Rules";

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    {path:'/', component:HomePage},
    {path:'/qwixx/:players', component:Qwixx},
    {path:'/rules', component:Rules}

  ],
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
