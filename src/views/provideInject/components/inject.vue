<template>
<div class="treeds-list">
    <h1>子组件</h1>
    <div class="object-list">
        <div>{{listObj.name}}</div>
        <div>{{listObj.title}}</div>
    </div>
    <inject-c></inject-c>
</div>

</template>

<script>
import injectC from './injectC.vue'
export default {
    components:{
        injectC
        
    },
    inject:['listObj','listArr'],
    
    data() {
        return {
            listObj:this.listObj,
            listArr:this.listArr
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
.treeds-list{
    width:750px;
    margin:0 auto;
   
}

h1{
    text-align: center;
    font-size: 36px;
}
.object-list{
    padding:5px 10px;
    border:1px solid red;
    color:#333;
    font-size: 26px;
}

</style>