import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index/index'
import lowHotel from '@/page/lowHotel/lowHotel'
import holiday from '@/page/holiday/holiday'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index 
    },
    {
    	path:'/lowHotel',
    	name:'lowHotel',
    	component:lowHotel
    },
    {
    	path:'/holiday',
    	name:'holiday',
    	component:holiday
    }
  ]
})
