import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeIndex from './components/HomeIndex.vue'
import HomeCourses from './components/HomeCourses.vue'
import HomeSpecial from './components/HomeSpecial.vue'
import AuthorList from './base_components/AuthorList.vue'
import Study from './views/Study.vue'
import Message from './views/Message.vue'
import Publish from './views/Publish.vue'
import My from './views/My.vue'
import CourseDet from './components/CourseDet.vue'
import AuthorDet from './components/AuthorDet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'a-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        showFooter: true
      },
      children: [
        {
          path: '1',
          component: HomeIndex
        },
        {
          path: '2',
          component: HomeCourses
        },
        {
          path: '3',
          component: HomeCourses
        },
        {
          path: '4',
          component: HomeCourses
        },
        {
          path: '5',
          name:'homeSpecial',
          component: HomeSpecial
        },
        {
          path: '',
          redirect: '/home/1'
        }
      ]
    },
    {
      path: '/study',
      name: 'study',
      component: Study,
      meta:{
        showFooter: true
      },
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish,
      meta:{
        showFooter: true
      },
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta:{
        showFooter: true
      },
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
        showFooter: true
      },
    },
    {
      path: '/courseDet/:id',
      name: 'courseDet',
      component: CourseDet
    },
    {
      path: '/authorDet/:id',
      name: 'authorDet',
      component: AuthorDet
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
