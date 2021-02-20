<template>
    <div class="emit-list">
        <div class="emit-area">
           <h1>子组件展示父组件传过来的值</h1>
            <div class="emit-item">
                {{item.name}}
            </div> 
        </div>
        <div class="emit-area" @click="filsBtn">
            <div class="emit-fils">触发向父组件传值</div>
        </div>
    </div>
</template>
<script>
export default {
    // data 上的数据，都是可读可写的；
    // props 中的数据，都是只读的，无法重新赋值，赋值会报错
    props:{//子组件接受父组件传过的值
        item:{
            type:Object,
            default:{}
        }
    },
    watch: {
        item:function(val){
            console.log(val)
        }
    },
    data() {
        return {
            filsList:{//子组件向父组件传的参数
                name:'子组件传给父组件的参数，来跟华子'
            }
        }
    },
    methods: {
        //子组件向父组件传值：父组件向子组件传递方法的同时，把要发送给父组件的数据，在调用方法的时候当作参数传递进去
        filsBtn(){//子组件想父组件传值时间
            console.log('12132')
            this.$emit('changeFather',this.filsList)
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
.emit-item{
    color:red;
    font-size: 28px;
}

</style>