
<template>
  <div class="home">
    <ul class="nav-list">
      <li v-for="(item,index) in list" :key="index" @click="pathBtn(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      list:[{
        name:"props和$emit",
        path:"/index/props"
      },{
        name:"$attrs和$listeners",
        path:"/index/attrsListeners"
      },{
        name:"中央事件总线（非父子组件间通信）",
        path:"/index/centralEvent"
      },{
        name:"v-model",
        path:"/model/model"
      },{
        name:"provide和inject",
        path:"/index/provideInject"
      },{
        name:"$parent和$children",
        path:"/parentChildren/parent"
      },{
        name:"vuex",
        path:""
      }]
    }
  },
  methods: {
    pathBtn(item){
      console.log('11111111')
      this.$router.push({ path:item.path, query:{}})
    }
  }
}
</script>
<style scoped>
.nav-list{
  width:300px;
  margin:0 auto;
  padding:20px 0;
}
.nav-list>li{
  padding:10px 0;
  text-align: center;
  border:1px solid red;
  margin: 10px 0;
  border-radius: 2px;
}
</style>
