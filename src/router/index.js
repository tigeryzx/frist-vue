import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import '../assets/css/app.css'

import Home from '@/view/Home'
import VideoList from '@/view/VideoList'
import VideoInfo from '@/view/VideoInfo'

Vue.use(MuseUI)
Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})
