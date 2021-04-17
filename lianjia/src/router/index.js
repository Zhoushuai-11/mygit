import Vue from 'vue'
import VueRouter from 'vue-router'
import Enter from '../views/Enter.vue'
import mainindex from '../components/mainindex'
import context from '../components/context'
import seehome from '../components/seehome'
import mine from '../components/mine'
import onsearch from '../views/onsearch'
import addr from '../views/addr'
import oldhome from '../views/oldhome'
import map from '../views/map'
import allhome from '../views/allhome'
import newhome from '../views/newhome'
import renthome from '../views/renthome'
import torent from '../views/torent'
import homeaddr from '../views/homeaddr'
import danyuan from '../views/danyuan'
import freehome from '../views/freehome'
import sellhome from '../views/sellhome'
import login from '../views/login'
import regist from '../views/regist'
import allknow from '../views/allknow'




Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'Enter',
    component: Enter
  },
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
	children:[
		{
			path:'/index/mainindex',
			component:mainindex
		},
		{
			path:'/index/context',
			component:context
		},
		{
			path:'/index/seehome',
			component:seehome
		},
		{
			path:'/index/mine',
			component:mine
		}
	]
  },
  {
	  path: '/onsearch',
	  name: 'onsearch',
	  component: () => import('../views/onsearch.vue')
  },
  {
	  path: '/addr',
	  name: 'addr',
	  component: () => import('../views/addr.vue')
  },
  {
	  path:'/oldhome',
	  name:'oldhome',
	  component:() => import('../views/oldhome.vue')
  },
  {
	  path:'/map',
	  name:'map',
	  component:() => import('../views/map.vue')
  },
  {
	  path:'/allhome',
	  name:'allhome',
	  component:() => import('../views/allhome.vue')
  },
  {
	  path:'/newhome',
	  name:'newhome',
	  component:() => import('../views/newhome.vue')
  },
  {
	  path:'/renthome',
	  name:'renthome',
	  component:() => import('../views/renthome.vue')
  },
  {
	  path:'/torent',
	  component:() => import('../views/torent.vue')
  },
  {
	  path:'/homeaddr',
	  component:() => import('../views/homeaddr.vue')
  },
  {
	  path:'/danyuan',
	  component:() => import('../views/danyuan.vue')
  },
  {
	  path:'/freehome',
	  component:() => import('../views/freehome.vue')
  },
  {
	  path:'/sellhome',
	  component:() => import('../views/sellhome.vue')
  },
  {
	  path:'/login',
	  component:() => import('../views/login.vue')
  },
  {
	  path:'/regist',
	  component:() => import('../views/regist.vue')
  },
  {
	  path:'/allknow',
	  component:() => import('../views/allknow.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
export default router
