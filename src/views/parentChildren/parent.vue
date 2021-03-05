<template>
    <div class="props-list">
        <h1>父组件</h1>
        <div @click="changeChildValue">{{name}}</div>
        <children></children>
    </div>
</template>
<script>

import children from './components/children.vue'
export default {
    components:{
        children
    },
    data() {
        return {
            name:'父组件传给子组件的值：nice',
            message:'hello'
        }
    },
     methods:{
      changeChildValue(){
        this.$children[0].mymessage = this.name;
      }
    },
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
</style>