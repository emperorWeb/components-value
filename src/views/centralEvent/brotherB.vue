<template>
    <div>
        <ul class="brother-list">
            <li>接收子组件传的值</li>
            <li>{{number}}</li>
        </ul>
    </div>
</template>

<script>
export default {
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
        this.$bus.on('add',this.handleAddRandom)
    },
    beforeDestroy(){
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