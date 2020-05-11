import Vue from 'vue'
import Router from 'vue-router'
import NowShows from './components/views/NowShows.vue'
import NowShowDetail from './components/views/NowShowDetail.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: NowShows
    },
    {
      path: '/shows/:id',
      component: NowShowDetail
    }
  ]
})