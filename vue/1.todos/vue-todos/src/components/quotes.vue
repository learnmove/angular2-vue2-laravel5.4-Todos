<template>
<div class=""> 
<button class="btn btn-primary" @click="onGetQuotes">拿取</button>
    <app-quote v-for="quote in quotes" :qt="quote" @quoteDeleted="onQuoteDeleted($event)"></app-quote>
</div>
</template>
<script>
import Quote from './quote.vue'
import axios from 'axios'
    export default{
        data(){
            return {
                quotes:[]
            }
        },
        components:{
            'app-quote':Quote
        },
        methods:{
            onGetQuotes(){
                axios.get('http://localhost/laravel/laraveltodo/todo/public/api/quotes')
                .then((response)=>this.quotes=response.data.quotes)
                .catch((error)=>console.log(error));
            },
            onQuoteDeleted(id){
               const position =this.quotes.findIndex((element)=> element.id==id);
               this.quotes.splice(position,1);
            }
        }
    }
</script>