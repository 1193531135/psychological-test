import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   redirect:'/cover-page'
  // },
  {
    path: '/',
    // path: '/cover-page',
    name: 'CoverPage',
    component:re => require(['../components/CoverPage.vue'],re)
  },
  {
    path: '/questions',
    name: 'Questions',
    component:re => require(['../components/Questions.vue'],re)
  },
  {
    path: '/color-report',
    name: 'Coloreport',
    component:re => require(['../components/Coloreport.vue'],re)
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
