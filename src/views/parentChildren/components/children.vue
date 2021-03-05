<template>
    <div class="props-list">
        <h1>子组件</h1>
        <div @click="changeValue">{{mymessage}}</div>
    </div>
</template>
<script>

export default {
    props:{//v-model会自动传递一个字段为value的props属性
       value:String, 
    },
    data() {
        return {
            mymessage:'',
            name:'此方法改变父组件内的值：耦合！'
        }
    },
    methods:{
        changeValue(){
        this.$parent.name = this.name;//通过如此调用可以改变父组件的值
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