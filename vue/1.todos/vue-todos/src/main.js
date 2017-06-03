import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Quotes from './components/quotes.vue'
import NewQuote from './components/new-quote.vue'
import Signup from './components/signup.vue'
import Signin from './components/signin.vue'
import Auth from './plugins/Auth.js';

Vue.use(Auth);
Vue.use(VueRouter);

const routes=[
  {path:'',component:Quotes},
  {path:'/new',component:NewQuote},
  {path:'/signup',component:Signup},
  {path:'/signin',component:Signin},
  
  
  
];
const router=new VueRouter({
  mode:'history',
  routes:routes
})
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
