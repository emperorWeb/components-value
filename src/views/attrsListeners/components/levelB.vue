<template>
    <div>
        <div class="level-b">
            <h1>子组件B</h1>
            
        </div>
        <level-c v-bind="$attrs" v-on="$listeners"></level-c>
    </div>
    
</template>
<script>
import levelC from './levelC.vue'
export default {
    components:{
        levelC
    },
    data() {
        return {}
    },
    created(){
        console.log(this.$listeners)
    },
    methods:{
        
    }
}
</script>
<style scoped>
.level-b{
    width:100%;
    height:200px;
    border:1px solid #609ff1;
    text-align: center;
}
h1{
    font-size: 36px;
    color: #333;
}
</style>