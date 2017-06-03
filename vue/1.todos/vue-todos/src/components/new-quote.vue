<template> 
<form @submit.prevent="onSubmitted">
<div class="form-group">
<label for="content">Content</label>
<input type="text" name="" id="content" class="form-control" v-model="quoteContent">
</div>
<button class="btn btn-primary" type="submit">Submit</button>
</form>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            quoteContent:''
        }
    },
    methods:{
        onSubmitted(){
            axios.post('http://localhost/laravel/laraveltodo/todo/public/api/quote'+this.$auth.getTokenBody(),
            {content:this.quoteContent})
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error));
        }
    }
}
</script>