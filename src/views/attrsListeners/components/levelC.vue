<template>
    <div class="level-c">
        <h1>子组件C</h1>
        <div class="level-messagec">{{$attrs.messagec.name}}</div>
        <ul>
            <li v-for="(item,index) in $attrs.message" :key="index">
                <div>姓名：{{item.name}} 性别：{{item.sex}} 年龄：{{item.age}} 子：{{item.son}}</div>
            </li>
        </ul>
        <div class="level-list" @click="levelBtn()">点击C组件传值给A组件事件</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[{
                name:'子组件传给父组件A的值：一件大棉袄'
            },{
                name:'子组件传给父组件A的值：一壶女儿红'
            },{
                name:'子组件传给父组件A的值：一条华子'
            }]
        }
    },
    created(){
        console.log(this.$attrs)
    },
    methods:{
        levelBtn(){
            this.$emit('getChildData',this.list)
        }
    }
}
</script>
<style scoped>
.level-c{
    width:100%;
    height:400px;
    border:1px solid #609ff1;
    text-align: center;
}
h1{
    font-size: 36px;
    color: #333;
}
.level-messagec{
    font-size: 26px;
    color:red;
}
.level-list{
    padding:10px;
    cursor:pointer;
}
</style>