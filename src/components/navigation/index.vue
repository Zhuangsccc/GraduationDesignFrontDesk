<template>
  <div class="nav-box">
    <el-card style="display: flex;justify-content: center;">
      <el-row style="width: 1200px;margin-left: 200px;" >
        <el-col :span="3"  v-for="(item) in navList " :key="item.title">
          <navigationBlock  :myImg="item.img" :title="item.title">
          </navigationBlock>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import navigationBlock from "@/components/navigationBlock"
export default {
  data() {
    var img1 = require("@/assets/icons/首页.png")
    var img2 = require("@/assets/icons/个人信息.png")
    var img3 = require("@/assets/icons/学习成绩.png")
    var img4 = require("@/assets/icons/财务.png")
    var img5 = require("@/assets/icons/日常事务.png")
    var img6 = require("@/assets/icons/留言板.png")
    var img7 = require("@/assets/icons/退出.png")
    return {
      navList: [
        {
          img: img1,
          title: "首页"
        },
        {
          img: img2,
          title: "信息"
        },
        {
          img: img3,
          title: "成绩"
        },
        {
          img: img4,
          title: "财务"
        },
        {
          img: img5,
          title: "事务"
        },
        {
          img: img6,
          title: "留言板"
        },
        {
          img:img7,
          title:"退出"
        }
      ]
    }
  },
  components: { navigationBlock }
}
</script>

<style>
.nav-box {
  width: 100%;
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: aqua;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}
</style>