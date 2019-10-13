<template>
    <div>
       
        <button @click="add(1)">加一</button>
        <button @click="reduce(1)">减一</button>
        <button @click="addAction">action+</button>
        <button @click="reduceAction">action-</button>
         <h1>{{count}}</h1>
         <h1>{{count2}}</h1>
        
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
   methods: {
       ...mapMutations(['add','reduce']),
       ...mapActions(["addAction","reduceAction"])
   },
   computed:{
       
       ...mapState(["count"]),
       ...mapGetters(["count2"]),
      
   
   }
    
}
</script>