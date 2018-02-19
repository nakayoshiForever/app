import Vue from 'vue'
import Router from 'vue-router'
import rolling from '@/components/rolling'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rolling',
      component: rolling
    },
  ]
})
