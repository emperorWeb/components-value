<template>
    <!-- 我们必须让组件A通过prop传递消息给组件B，组件B在通过prop传递消息给组件C； -->
    <div>
        <div class="level-list">
            <h1>父组件A</h1>
            <ul>
                <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <level-b :messagec="messagec" :message="message" @getChildData="levelData"></level-b>
    </div>
    
</template>
<script>
import levelB from './components/levelB.vue'
export default {
    components:{
        levelB
    },
    data() {
        return {
            messagec:{
                name:'父组件传值给子组件下的子组件c的值，一个棒棒糖'
            },
            message:[{
                name:'张飞',
                sex:'男',
                son:'翼德',
                age:'54'
            },{
                name:'刘备',
                sex:'男',
                son:'玄德',
                age:'62'
            },{
                name:'关羽',
                sex:'男',
                son:'云长',
                age:'58'
            }],
            list:[]
        }
    },
    methods:{
        levelData(item){
            // console.log(item);
            this.list= item;
            // console.log(this.list)
        }
    }
}
</script>
<style scoped>
.level-list{
    width:100%;
    height:300px;
    border:1px solid #609ff1;
    text-align: center;
    
}
h1{
    font-size: 36px;
    color: #333;
}
</style>