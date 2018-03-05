// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局引入css样式表
import './assets/style/reset.css'

//引入iconfont
import './assets/style/iconfont/iconfont.css'

//引入swiper css样式表
import '../node_modules/swiper/dist/css/swiper.min.css' 
Vue.config.productionTip = false

//引入config
import config from './modules/config'

//引入jsonp
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{config},
  components: { App },
  template: '<App/>'
})
