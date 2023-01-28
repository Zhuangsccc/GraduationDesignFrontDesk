import Vue from 'vue'
import Router from 'vue-router'

export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/homepage"),
    name: "homePage",
    meta:{show:true}
  },
  {
    path: "/personalInformation",
    component: () => import("@/views/personalInformation"),
    name: "personalInformation",
    meta:{show:true}
  },
  {
    path: "/scoreQuery",
    component: () => import("@/views/scoreQuery"),
    name: "scoreQuery",
    meta:{show:true}
  },
  {
    path:"/login",
    component:()=>import("@/views/login"),
    meta:{show:false}
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