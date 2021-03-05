<template>
    <div class="props-list">
        <h1>父组件</h1>
        <div>{{name}}</div>
        <child v-model="name"></child>
    </div>
</template>
<script>

import child from './components/child.vue'
export default {
    components:{
        child
    },
    data() {
        return {
            name:'父组件传给子组件的值：nice'
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
</style>