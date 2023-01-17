import Vue from 'vue'
import Router from 'vue-router'

export const constantRoutes = [
    {
        path:"/",
        component:()=>import("@/views/homepage"),
        name:"homePage"
    }
  ]
Vue.use(Router)
const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
  const router = createRouter()
  export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher 
  }
  
  export default router