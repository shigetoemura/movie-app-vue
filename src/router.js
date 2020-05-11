import Vue from 'vue'
import Router from 'vue-router'
import ShowDetail from './ShowDetail.vue'
import NowShows from './components/shows/NowShows.vue'
import PopularShows from './components/shows/PopularShows.vue'
import TopShows from './components/shows/TopShows.vue'
import Upcoming from './components/shows/Upcoming.vue'
import ShowSearch from './components/search/ShowSearch.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/now_playing',
      component: NowShows
    },
    {
      path: '/shows/:id',
      component: ShowDetail
    },
    {
      path: '/popular',
      component: PopularShows
    },
    {
      path: '/top',
      component: TopShows
    },
    {
      path: '/upcoming',
      component: Upcoming
    },
    {
      path: '/',
      component: ShowSearch
    }
  ]
})