<template>
<div>
<h1>this is liuhaochen's page</h1>
<HelloWorld :msg="str"/>
</div>
</template>
<script>
import HelloWorld from '../components/HelloWorld'
export default {
    data(){
        return{
            str:"hello liuhaochen"
        }
    },
    components:{
        HelloWorld
    }
}
</script>