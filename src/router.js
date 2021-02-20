import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/index/props",
      name: "props",
      component: () =>
        import("@/views/propsEmit/props.vue")
    },
    {
      path: "/index/attrsListeners",
      name: "attrsListeners",
      component: () =>
        import("@/views/attrsListeners/levelA.vue")
    },
    {
      path: "/index/centralEvent",
      name: "centralEvent",
      component: () =>
        import("@/views/centralEvent/brotherA.vue")
    },
    {
      path: "/index/centralEventB",
      name: "centralEventB",
      component: () =>
        import("@/views/centralEvent/brotherB.vue")
    },
    {
      path: "/index/provideInject",
      name: "provideInject",
      component: () =>
        import("@/views/provideInject/provide.vue")
    }
  ]
})
