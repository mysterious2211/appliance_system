import Vue from 'vue'
import App from './App.vue'

//引入VueRouter
import VueRouter from "vue-router";

//引入路由器
import router from "@/router"

// 关闭Vue的生产提示
Vue.config.productionTip = false
//引用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus= this //安装全局事件总线，$bus就是当前应用的vm
  },

}).$mount('#app')
