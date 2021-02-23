<template>
<div class="treeds-list">
    <h1>孙子组件</h1>
    <ul>
        <li v-for="(item,index) in listArr" :key="index">
            <div>{{item.name}}</div>
            <div>{{item.title}}</div>
        </li>
    </ul>
</div>

</template>

<script>
export default {
    inject:['listObj','listArr'],
    
    data() {
        return {
            listObj:this.listObj,
            listArr:this.listArr
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>
.treeds-list{
    width:750px;
    margin:0 auto;
   
}

h1{
    text-align: center;
    font-size: 36px;
}
.object-list{
    padding:5px 10px;
    border:1px solid red;
    color:#333;
    font-size: 26px;
}
ul{
    padding:5px 10px;
    margin-top:20px;
    border:1px solid red;
    color:rgb(206, 59, 194);
    font-size: 26px;
}
</style>