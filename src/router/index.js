import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/cover-page'
  },
  {
    path: '/cover-page',
    name: 'CoverPage',
    component:re => require(['../components/CoverPage.vue'],re)
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
