<template>
<div class="panel panel-default">
<div class="panel-body">
{{qt.content}}
</div>
<div class="panel-footer">
            <div v-if="editing">
            <input type="text" v-model="EditValue" id="">
            <a @click="onUpdate"> save</a>
            <a @click="onCancel"> cancel</a>
            
            </div>
            <div v-if="!editing">
            <a @click="onEdit"> Edit</a>
            <a @click="onDelete"> Delete</a>
            </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
    export default{
        props:['qt'],
        data(){
            return {
                editing:false,
                EditValue:this.qt.content
            }
        },
        methods:{
            onEdit(){
                this.editing=true;
            },
            onCancel(){
                this.editing=false;
            },
            onDelete(){
                
                axios.delete('http://localhost/laravel/laraveltodo/todo/public/api/quote/'+this.qt.id+this.$auth.getTokenBody())
                .then((response)=>this.$emit('quoteDeleted',this.qt.id))
                .catch((error)=>console.log(error));
            },
            onUpdate(){
                axios.put('http://localhost/laravel/laraveltodo/todo/public/api/quote/'+this.qt.id+this.$auth.getTokenBody(),{content:this.EditValue})
                .then((response)=>this.qt.content=response.data.quote.content)
                .catch((error)=>console.log(error));

            }
           
        }
    }
</script>