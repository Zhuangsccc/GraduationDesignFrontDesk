<template>
  <div id="app">
    <topArea v-show="this.$route.meta.show"></topArea>
    <div class="out-menu-style" >
      <el-menu  v-show="this.$route.meta.menu" :default-active="activeIndex"  class="el-menu-demo menu-style" mode="horizontal">
    <el-menu-item @click="routerJump('homePage')" index="homePage">首页</el-menu-item>
    <el-menu-item @click="routerJump(`personInfo`)" index="personalInformation/personInfo">
      个人信息
    </el-menu-item>
    <el-menu-item @click="routerJump(`scoreQuery`)" index="scoreQuery" >成绩查询</el-menu-item>
    <el-menu-item @click="routerJump(`finance`)" index="finance" >财务缴交</el-menu-item>
    <el-menu-item @click="routerJump(`board`)" index="messageBoard">留言板</el-menu-item>
    <el-menu-item @click="routerJump(`affair`)" index="affair">事务</el-menu-item>
  </el-menu>
    </div>
    <transition name="moveCartoon" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import topArea from "@/components/topArea"
export default {
  name: 'App',
  components:{topArea},
   data() {
      return {
        activeIndex:"personalInformation"
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      routerJump(name){
        if(this.$route.name!==name){
          this.$router.push({name,})
        }
      }
    },
    watch:{
      "$route.name":{
        handler(newValue){
          this.$nextTick(()=>{
            this.activeIndex=newValue
          })
        }
      }
    }
}
</script>

<style scoped >
 #nprogress .bar {
      background: red !important; 
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  min-width: 1200px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}
.menu-style{
  width: 1200px;
}
.out-menu-style{
  display: flex;
  justify-content: center;
}
.moveCartoon-enter-active {
    -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

</style>
