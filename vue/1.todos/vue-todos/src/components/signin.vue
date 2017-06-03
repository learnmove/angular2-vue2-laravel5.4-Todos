<template>
<div class="form">
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
                password:this.password,
                email:this.email
            }
            axios.post('http://localhost/laravel/laraveltodo/todo/public/api/user/signin',
            body,
            {headers:{'Content-Type':'application//json','X-Requested-With':'XMLHttpRequest'}} )
            .then((response)=>{
                const token=response.data.token;
                const base64Url=token.split('.')[1];
                const base64=base64Url.replace('-','+').replace('_','/');
                const payload=JSON.parse(window.atob(base64));
                console.log(token); 
                this.$auth.setToken(token);
                })
            .catch((error)=>console.log(error));
        }
    }
}
</script>