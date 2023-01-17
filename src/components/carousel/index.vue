<template>
   <div class="swiper-box">
  <div class="swiper-content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item) in image_list" :key="item" >
          <img :src="item" alt="" srcset="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
    </div>
   </div>
</div>
</template>

<script>
import Swiper from "swiper"
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
    },
    mounted(){
         var swiper = new Swiper('.swiper-container', {
      autoplay: false,
      loop: true,
      initialSlide: 2,
      spaceBetween: 20,
      centeredSlides : true,
      slidesPerView : 1.9,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });
    }
}
</script>

<style scoped>
.swiper-box{
    margin-top: 10px;
}
.center-box {
   width: 100%;
   display: flex;
}
.out-box{
  width: 100%;
  display: flex;
  justify-content: center;
}
.carousel-box{
    width:1200px;
}
.swiper-container {
      width: 100%;
      height: 100%;
      max-width: 1800px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-slide img {
      width: 100%;
      height: 400px;
      max-width: 1600px;
    }
    .swiper-button-next {
      right: 16%;
      width: 30px;
      height: 30px;
    }
 
    .swiper-button-prev {
      left: 16%;
      width: 30px;
      height: 30px;
    }
    
    .swiper-container-horizontal>.swiper-pagination-bullets {
      bottom: 0;
    }
    .swiper-pagination {
      position: relative;
    }
</style>