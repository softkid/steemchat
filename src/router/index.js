import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import SettingView from '@/components/SettingView'
import LogView from '@/components/LogView'
import NoticeView from '@/components/NoticeView'

import StrategyView from '@/components/StrategyView'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import CameraView from '@/components/CameraView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/setting',
      name: 'setting',
      component: SettingView
    },
    {
      path: '/log',
      name: 'log',
      component: LogView
    },
    {
      path: '/notice',
      name: 'notice',
      component: NoticeView
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: StrategyView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraView
    }
  ]
})
