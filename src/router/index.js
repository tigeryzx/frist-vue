import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '../assets/css/app.css'

import Home from '@/view/Home'
import VideoList from '@/view/VideoList'
import VideoInfo from '@/view/VideoInfo'
import FavList from '@/view/FavList'
import FavViewList from '@/view/FavViewList'

Vue.use(MuseUI)
Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  transitionOnLoad: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/VideoList',
      component: VideoList
    },
    {
      path: '/VideoInfo',
      name: 'videoInfo',
      component: VideoInfo
    },
    {
      path: '/FavList',
      component: FavList
    },
    {
      path: '/FavViewList',
      component: FavViewList
    }
  ]
})
