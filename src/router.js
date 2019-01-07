import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeIndex from './components/HomeIndex.vue'
import HomeCourses from './components/HomeCourses.vue'
import HomeSpecial from './components/HomeSpecial.vue'
import CourseDet from './components/CourseDet.vue'
import Study from './views/Study.vue'
import Publish from './views/Publish.vue'
import Find from './views/Find.vue'
import My from './views/My.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'a-active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
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
          component: HomeSpecial
        }
      ]
    },
    {
      path: '/courseDet/:id',
      name: 'courseDet',
      component: CourseDet
    },
    {
      path: '/study',
      name: 'study',
      component: Study
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
