<template>
    <div class="counter-list">
        <div>子组件向父组件传值</div>
        <button @click="handleAddRandom">随机增加</button>
        <div @click="chc">{{childc}}</div>
        <div>接收到b组件传过来的值：{{res}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            childc:'我是组件c',
            res:""
        }
    },
    created(){
        let _that = this;
        this.$bus.on('message',function(res){
            console.log(res);
            _that.res = res
        })
    },
    methods:{
        handleAddRandom(){
            const num = Math.floor(Math.random()*100+1)
            this.$bus.emit('add',num)
        },
        chc(){
            this.$bus.emit('messagec',this.childc) 
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