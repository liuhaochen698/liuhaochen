<template>
  <div id="app">
    <Navgation></Navgation>
  <router-view/>
    </div> 
</template>
import Navgation from '@/components/Navgation.vue'
<script>
export default {
  components:{
    Navgation
  }
}
</script>
<style>
*{
  margin:0;
  padding:0;
}
a{
  text-decoration:none;

}
li{
  list-style:none;
}


</style>
