<template>
   <div class="connect">
   <h1>this is connect page</h1>
    <router-link :to="{name:'test1',params:{name:'小a',age:'12'}}">test1</router-link> |
    <router-link to="/connect/test2/xiaob/13">test2</router-link> |
    <router-link to="/connect/gotest2/xiaoc/20">gotest2</router-link>  
    <router-view></router-view>
   </div>
</template>
<script>
export default {
   name:"connect",
   data(){
      return{
         str:"is our connection"
      }
   },
   components:{
     
   }
}
</script>