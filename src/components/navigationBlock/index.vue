<template>
  <el-card style="width: 100px; justify-content: center; align-items: center; background-color: #3490de;border-radius: 18px; margin-top: 20px;">
    <div class="nav-block">
          <img class="img-style" :src="myImg"  >
          <span class="title iconfont">{{ title }}</span>
    </div>
  </el-card>
</template>

<script>
export default {
  props:{
    myImg:{
      type:String,
      default:""
    },
    title:{
      type:String,
      default:""
    }
  }
}
</script>

<style>
.img-style{
  width: 60px;
  height: 50px;
}
.nav-block{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title{
  width: 50px;
  font-family:"阿里妈妈数黑体 Bold" !important;
}
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "思源宋体 ExtraLight";font-weight: 250;src: url("//at.alicdn.com/wf/webfont/OwzqFAbuXJtW/8AVJAgU9DGDG2VIqrKDgf.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/OwzqFAbuXJtW/Uix1CY5xOrxui8_RyMZJw.woff") format("woff");
  font-display: swap;
}

.iconfont {
  font-family: "思源宋体 ExtraLight" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #ffffff;
}
</style>