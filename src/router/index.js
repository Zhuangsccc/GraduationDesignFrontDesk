import Vue from 'vue'
import Router from 'vue-router'

export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/homepage"),
    name: "homePage",
    meta:{show:true,menu:false}
  },
  {
    path: "/personalInformation",
    component: () => import("@/views/personalInformation"),
    name: "personalInformation",
    children:[
      {
        path:"personInfo",
        component:()=>import("@/views/personalInformation/personInfo"),
        name:"personInfo",
        meta:{show:true,menu:true},
      },
      {
        path:"editPersonInfo",
        component:()=>import("@/views/personalInformation/editPersonInfo"),
        name:"editPersonInfo",
        meta:{show:true,menu:true},
      }
    ]
  },
  {
    path: "/scoreQuery",
    component: () => import("@/views/scoreQuery"),
    name: "scoreQuery",
    meta:{show:true,menu:true}
  },
  {
    path: "/finance",
    component: () => import("@/views/finance"),
    name: "finance",
    meta:{show:true,menu:true}
  },
  {
    path: "/messageBoard",
    component: () => import("@/views/messageBoard"),
    name: "messageBoard",
    meta:{show:true,menu:true}
  },
  {
    path: "/affair",
    component: () => import("@/views/affair"),
    name: "affair",
    meta:{show:true,menu:true}
  },
  {
    path:"/login",
    component:()=>import("@/views/login"),
    meta:{show:false,menu:false}
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