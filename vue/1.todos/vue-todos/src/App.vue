<template>
  <div id="app">
<div class="container">
<router-link :to="{path:'/new'}">new</router-link>
<router-link :to="{path:'/'}">todos</router-link>
<router-link :to="{path:'/signup'}">Signup</router-link>
<router-link :to="{path:'/signin'}">Signin</router-link>


  <div class="row">
    <div class="col-xs-12">
      <router-view></router-view>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import NewQuote from './components/new-quote.vue';

export default {
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
