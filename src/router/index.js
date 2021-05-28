import Vue from 'vue'
import Router from 'vue-router'
import TimeScroll from '@/view/TimeScroll'
import TestRequest from '@/view/TestRequest'
import content from '@/view/content'
import Frame from '@/view/Frame'
import d3Router from './d3Router/D3Router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TimeScroll',
      component: content,
      meta: {
        title: 'timeScroll'
      }
    },
    {
      path: '/d3',
      name: 'd3',
      component: Frame,
      children: d3Router,
    },
    {
      path: '/TimeScroll',
      name: 'TimeScroll',
      component: TimeScroll,
      meta: {
        title: 'timeScroll'
      }
    },
    {
      path: '/testRequest',
      name: 'TestRequest',
      component: TestRequest,
      meta: {
        title: "http请求"
      }
    }
  ]
})
