import Vue from 'vue'
import Router from 'vue-router'
import daohang from '@/components/daohang'
import jingyesi from '@/components/jingyesi/jingyesi.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: ''
  },
  {
    path: '/',
    name: 'daohang',
    component: daohang
  },
  {
    path: '/jingyesi',
    name: 'jingyesi',
    component: jingyesi
  }
  ]
})
