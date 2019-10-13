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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      alias: '/aboutme',
      beforeEnter: (to, from, next) => {
        next(true)
      }
    },
    {
      path:'*',
      component:() =>import('./views/Error.vue')
    },
    {
      path: '/connect',
      name:'connect',
      component: () => import('./views/Connect.vue'),
      children:[
        {
          path:"/connect/test1",
          name:"test1",
          component:()=>import('./views/test1.vue')
        },
        {
          path:"/connect/test2/:username/:userage",
          name:"test2",
          component:()=>import('./views/test2.vue')
        },
        {
          path:'/connect/gotest2/:username/:userage',
          redirect:'/connect/test2/:username/:userage'
        }
      ]
    },
    {
      path:'/home',
      redirect:'/'
    },
    {
      path:"/test3",
      name:"/test3",
      component: ()=>import('./views/test3.vue')
    },
    {
      path: '/liuhaochen',
      name: 'liuhaochen',
      component: ()=> import('./views/Page.vue'),
      
    }
  ]
})
