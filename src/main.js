import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css';
import 'normalize.css/normalize.css' 
import '@/permission'
import router from './router'
import store from './store'
import '@/icons'
Vue.config.productionTip = false
Vue.use(ElementUI);
import FilterBar from "@/components/FilterBar"
Vue.component(FilterBar.name,FilterBar)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
