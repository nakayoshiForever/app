import Vue from 'vue'
import Router from 'vue-router'
import rolling from '@/components/rolling'
import wordCheck from '@/components/wordCheck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wordCheck',
      component: wordCheck
    },
  ]
})
