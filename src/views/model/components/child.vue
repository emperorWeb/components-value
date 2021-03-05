<template>
    <div class="emit-list">
        <h1>子组件</h1>
        <ul>
            <li >
                <div @click='changeValue'>来吧展示</div>
            </li>
            <li>
                {{value}}
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        value:String
    },
    data() {
        return {
            name:'在子组件中修改父组件内的参数：耦合！'
        }
    },
    mounted(){
        console.log(this.value)
    },
    methods: {
        changeValue(){
            this.$emit('input',this.name);//通过如此调用可以改变父组件上v-model绑定的值
        }
    }
}
</script>
<style scoped>
.emit-list{
    width:100%;
    height:400px;
    margin-top:20px;
    border:1px solid #54e0d5;
    text-align: center;
}
.emit-area{
    height:200px;
    cursor:pointer;
    background: #f1f1f1;
}
h1{
    font-size: 36px;
    color: #333;
}
input{
    border:1px solid yellow;
}
</style>