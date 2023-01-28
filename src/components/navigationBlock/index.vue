<template>
  <el-card style=" width: 80px; justify-content: center; align-items: center; background-color: #3490de; border-radius: 18px; margin-top: 20px; " @click="toRouter" >
    <router-link :to="path" style="text-decoration-line: none" v-if="!isPath">
      <div class="nav-block">
        <img class="img-style" :src="myImg" />
        <span class="title iconfont">{{ title }}</span>
      </div>
    </router-link>
    <a href="http://localhost:9528/#/mydashboard" style="text-decoration-line: none" v-else>
      <div class="nav-block">
        <img class="img-style" :src="myImg" />
        <span class="title iconfont">{{ title }}</span>
      </div>
    </a>
  </el-card>
</template>

<script>
export default {
  props: {
    myImg: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "/",
    },
    isPath: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toRouter() {
      this.$router.push({
        path: this.path,
      });
    },
  },
};
</script>

<style>
.img-style {
  width: 42px;
  height: 30px;
}
.nav-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  width: 50px;
  font-family: "阿里妈妈数黑体 Bold" !important;
}
@font-face {
  font-family: "思源宋体 ExtraLight";
  font-weight: 250;
  src: url("//at.alicdn.com/wf/webfont/OwzqFAbuXJtW/8AVJAgU9DGDG2VIqrKDgf.woff2")
      format("woff2"),
    url("//at.alicdn.com/wf/webfont/OwzqFAbuXJtW/Uix1CY5xOrxui8_RyMZJw.woff")
      format("woff");
  font-display: swap;
}
.iconfont {
  font-family: "思源宋体 ExtraLight" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 10px;
  color: #ffffff;
}
</style>