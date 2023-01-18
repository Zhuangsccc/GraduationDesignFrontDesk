<template>
   <div @click="toEnd" ref="middle" class="card-box" style="margin-left:12px">
     <el-card  class="card-box infinite-list" :body-style="{ padding: '0px' }"  v-infinite-scroll="load" style="overflow:auto">
        <img :src="myImg" class="image">
        <div style="padding: 14px;">
          <span >{{context}}</span>
        </div>
      </el-card>
   </div>
</template>

<script>
export default {
  props:{
    myImg:{
      type:String,
      default:""
    },
    context:{
      type:String,
      default:"每个人都有梦想。但不同的是：有的人只梦，有的人敢想。"
    }
  },
data() {
    return {
      currentDate: new Date()
    };
  },
  methods:{
    load(){

    },
    toEnd(){
    this.$nextTick(() => {
     let middle= this.$refs["middle"];
     middle.children[0].scrollTop = middle.children[0].scrollHeight;
   })
},
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
    width: 1px;
}
.card-box{
    width: 300px;
    height:380px;
    margin-top: 5px;
    border-radius: 20px;
}
 .time {
    font-size: 13px;
    color: #999;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 300px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
@font-face {
  font-family: "思源宋体 ExtraLight";font-weight: 250;src: url("//at.alicdn.com/wf/webfont/OwzqFAbuXJtW/yrTvitXbrGp5pX-yAdRDA.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/OwzqFAbuXJtW/XCNdhy_fCZvFdmPX9xy2Y.woff") format("woff");
  font-display: swap;
}

.iconfont {
  font-family: "思源宋体 ExtraLight" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #000000;
}
</style>