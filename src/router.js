import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'

import OrgList from '../components/list'

import Hello from '../components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/',
      name: 'home1',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/orglist',
          name: 'orglist',
          component: OrgList
        }
      ]
    }
  ]
})
