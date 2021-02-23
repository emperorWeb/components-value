<template>
    <div>
        <ul class="brother-list">
            <li>父组件</li>
            <li>{{number}}</li>
        </ul>
        <counter-b></counter-b>
        <counter-c></counter-c>
    </div>
</template>

<script>
import counterB from './components/counterB.vue'
import counterC from './components/counterC.vue'
export default {
    components:{
        counterB,
        counterC
    },
    data(){
        return {
            number:0
        }
    },
    methods:{
        handleAddRandom(num){
            this.number += num
        }
    },
    created(){
        //this.$bus.on需要在created中使用，否则不会生效
        this.$bus.on('add',this.handleAddRandom)
    },
    beforeDestroy(){
        //需要在beforeDestroy中移除,因为组件销毁后，就没有必要把监听的句柄存储在vue-bus里面了
        this.$bus.off('add',this.handleAddRandom)
    }
}
</script>
<style scoped>
.brother-list{
    width:100%;
    height:400px;
    border:1px solid #609ff1;
    text-align: center;
}
</style>