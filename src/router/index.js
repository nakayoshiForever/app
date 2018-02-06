import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/components/TopPage'
import List from '@/components/List'
import Upload from '@/components/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
  ]
})
