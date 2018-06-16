import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from '@/components/IndexPage'
import '@/plugins/loading.css'
import '@/plugins/style.css'
import MessageBox from '@/plugins/MessageBox'
import Config from '@/plugins/Config'
import ComFun from '@/plugins/comfun.js'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(MessageBox)
Vue.use(Config)
Vue.use(ComFun)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/free_wash_car',
      name: 'IndexPage',
      component: IndexPage
    }
  ]
})
