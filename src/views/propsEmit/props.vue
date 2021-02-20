<template>
<div>
    <div class="props-list">
        <h1>父组件展示子组件传过来的值</h1>
        <div class="props-item">
            {{fils.name}}
        </div> 
    </div>
    <emit-list :item="father" @changeFather="fatherBtn"></emit-list>
</div>
    
</template>
<script>

import emitList from './components/emitList.vue'
export default {
    components:{
        emitList
    },
    data() {
        return {
            father:{
                name:'父组件传给子组件的值,一个小面包',
            },
            fils:{}
        }
    },
    methods:{
        fatherBtn(val){//父组件接受子组件传过来的值
            console.log(val);
            this.fils = val;
        }
    }
    
}
</script>
<style scoped>
.props-list{
    width:100%;
    height:400px;
    border:1px solid #609ff1;
    text-align: center;
}
h1{
    font-size: 36px;
    color: #333;
}
.props-item{
    color:red;
    font-size: 28px;
}
</style>
