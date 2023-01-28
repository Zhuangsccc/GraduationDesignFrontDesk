<template>
  <div class="nav-box">
    <div style="display: flex; justify-content: center">
      <div class="nav-list-box">
        <div v-for="item in navList" :key="item.title">
          <navigationBlock
            :myImg="item.img"
            :title="item.title"
            :path="item.path"
            :isPath="item.isPath ? item.isPath : false"
          >
          </navigationBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigationBlock from "@/components/navigationBlock";
export default {
  data() {
    var img1 = require("@/assets/icons/首页.png");
    var img2 = require("@/assets/icons/个人信息.png");
    var img3 = require("@/assets/icons/学习成绩.png");
    var img4 = require("@/assets/icons/财务.png");
    var img5 = require("@/assets/icons/日常事务.png");
    var img6 = require("@/assets/icons/留言板.png");
    var img7 = require("@/assets/icons/退出.png");
    var img8 = require("@/assets/icons/管理员后台.png");
    return {
      navList: [
        {
          img: img1,
          title: "首页",
          path: "/",
        },
        {
          img: img2,
          title: "信息",
          path: "/personalInformation",
        },
        {
          img: img3,
          title: "成绩",
          path:"/scoreQuery"
        },
        {
          img: img4,
          title: "财务",
        },
        {
          img: img5,
          title: "事务",
        },
        {
          img: img6,
          title: "留言板",
        },
        {
          img: img8,
          title: "后台",
          path: "http://localhost:9528/#/mydashboard",
          isPath: true,
        },
        {
          img: img7,
          title: "退出",
        },
      ],
    };
  },
  components: { navigationBlock },
};
</script>

<style>
.nav-box {
  width: 100%;
  background-color: #e1e7f1;
  padding-bottom: 20px;
  border-radius:10px ;
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: aqua;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}
.nav-list-box {
  display: flex;
  justify-content: space-between;
  width: 1000px;
}
</style>