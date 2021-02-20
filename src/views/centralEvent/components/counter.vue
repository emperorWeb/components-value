<template>
    <div class="counter-list">
        <div>子组件向父组件传值</div>
        <button @click="handleAddRandom">随机增加</button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        handleAddRandom(){
            const num = Math.floor(Math.random()*100+1)
            this.$bus.emit('add',num)
        }
    }
}
</script>
<style scoped>
.counter-list{
    width:100%;
    height:400px;
    border:1px solid #54e0d5;
    text-align: center;
}
</style>