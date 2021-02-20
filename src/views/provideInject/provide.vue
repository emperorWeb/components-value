<template>
    <div class="provide-list">
        <h1 @click="btnh">父组件</h1>
        
        <inject></inject>
    </div>
</template>

<script>
import inject from './components/inject.vue'
export default {
    components:{
        inject
        
    },
    provide:{
        listObj:{
            name:"对象",
            title:"你说什么"
        },
        listArr:[{
            name:'数组',
            title:'你说呢'
        },{
            name:'数组',
            title:'你说呢'
        }]
    },
    data() {
        return {
           
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
.provide-list{
    width:750px;
    margin:0 auto;
    border:1px solid olivedrab;
}
h1{
    text-align: center;
    font-size: 36px;
    color:red;
}
</style>