<template>
<div class="form">
<div class="form-group">
<label for="name">名字</label>
<input type="text" name="" id="" v-model="name" class="form-control">
</div>
<div class="form-group">
<label for="name">信箱</label>
<input type="text" name="" id="" v-model="email" class="form-control">
</div>
<div class="form-group">
<label for="name">密碼</label>
<input type="text" name="" id="" v-model="password" class="form-control">
</div>
<button type="submit" @click.prevent="onSignup">註冊</button>
</div>

</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            name:'',
            password:'',
            email:'',
        }
    },
    methods:{
        onSignup(){
           let body={
                name:this.name,
                password:this.password,
                email:this.email
            }
            axios.post('http://localhost/laravel/laraveltodo/todo/public/api/user/signup',
            body,
            {headers:{'Content-Type':'application//json','X-Requested-With':'XMLHttpRequest'}} )
            .then((response)=>console.log(response))
            .catch((error)=>console.log(error));
        }
    }
}
</script>