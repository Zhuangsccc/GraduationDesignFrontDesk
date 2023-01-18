<template>
  <div class="home-box">
    <carousel></carousel>
    <navigation></navigation>
    <div class="personality-bar">
      <div class="personality-bar-center">
        <one-day v-for="item in oneDayList" :key="item.context" :myImg="item.myImg" :context="item.context"></one-day>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "@/components/carousel";
import navigation from "@/components/navigation";
import oneDay from "@/components/oneDay";
export default {
  data() {
    var img1 = require("@/assets/oneWord/word1.jpg")
    var img2 = require("@/assets/oneWord/word2.jpg")
    return {
      value:new Date(),
      oneDayList:[
         {
          myImg:img1,
          context:"每个人都有梦想。但不同的是：有的人只梦，有的人敢想。"
         },
         {
          myImg:img2,
          context:"比别人多一点执着，你就会创造奇迹。"
         }
      ]
    };
  },
  components: { carousel, navigation, oneDay },
};
</script>

<style scope>
.personality-bar {
  display: flex;
  justify-content: center;
  background-image: url("@/assets/ptuLogo/gif1.gif");
  background-size: cover;
  width: 100%;
  height: 420px;
}
.personality-bar-center {
  width: 1400px;
  display: flex;
}
.calendar-style{
  

}
</style>