import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home.vue'
//import HomeFirst from"../views/home/childhome/HomeFirst.vue"
const HomeFirst = () => import("../views/home/homeview/HomeFirst.vue")
const HomeSinger = () => import("../views/home/homeview/HomeSinger.vue")

//import Client from "../views/client/Client.vue"
const Client = () => import("../views/client/Client.vue")
const About = () => import("../views/mymusic/About.vue")
const Vip = () => import("../views/vip/Vip.vue")
const Artists = () => import("../views/artists/Artists.vue")

// const Client = () => import("../views/client/Client.vue")

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		redirect: 'home'
	},
	{
		path: '/home',
		// name: 'Home',
		component: Home,
			children: [
			{
				path: '',
				redirect: 'first'
			},
			{
				path: 'first',
				name: 'first',
				component: HomeFirst
			},
			{
				path: 'singer',
				name: 'singer',
				component: HomeSinger
			}

		]
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: About
	},
	{
		path: '/client',
		name: 'Client',
		component: Client
	},
	{
		path: '/vip',
		name: 'Vip',
		component: Vip
	},
	{
		path: '/artists',
		name: 'Artists',
		component: Artists
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
