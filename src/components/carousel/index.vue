<template>
   <div class="out-box">
     <el-card class="center-box">
        <div class="carousel-box">
            <el-carousel :interval="4000" type="card"  height="400px">
                <el-carousel-item v-for="item in image_list" :key="item">
                    <el-image style="width:100%; height:100% " :src="item" fit="fit"></el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
    </el-card>
   </div>
</template>

<script>
export default {
    data() {
        var img1 = require("@/assets/Ptu/莆田学院1.jpg");
        var img2 = require("@/assets/Ptu/莆田学院2.jpg");
        var img3 = require("@/assets/Ptu/莆田学院3.jpg");
        var img4 = require("@/assets/Ptu/莆田学院4.jpg");
        var img5 = require("@/assets/Ptu/莆田学院5.jpg");
        var img6 = require("@/assets/Ptu/莆田学院6.jpg");
        return{
            image_list: [img1, img2, img3, img4,img5,img6],
        }
    }
}
</script>

<style scoped>
.center-box {
   width: 100%;
   display: flex;
   justify-content: center;
}
.out-box{
  width: 100%;
  display: flex;
  justify-content: center;
}
.carousel-box{
    width:1600px;
}
</style>