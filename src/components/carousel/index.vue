<template>
  <div class="swiper-box">
    <div class="swiper-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in image_list" :key="item">
            <img :src="item" alt="" srcset="" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-scrollbar"></div>
        <div class="swiper-button-prev"></div>
        <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
        <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    var img1 = require("@/assets/Ptu/1.png");
    var img2 = require("@/assets/Ptu/2.png");
    var img3 = require("@/assets/Ptu/3.png");
    var img4 = require("@/assets/Ptu/4.png");
    var img5 = require("@/assets/Ptu/5.png");
    var img6 = require("@/assets/Ptu/6.png");
    return {
      image_list: [img1, img2, img3, img4, img5, img6],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      loop: true,
      initialSlide: 2,
      spaceBetween: 0,
      centeredSlides: true,
      slidesPerView: 2,
      // 如果需要分页器
      scrollbar: {
        el: ".swiper-scrollbar",
         draggable: true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style scoped>
.swiper-box {
  margin-top: 5px;
}
.center-box {
  width: 100%;
  display: flex;
}
.out-box {
  width: 100%;
  display: flex;
  justify-content: center;
}
.carousel-box {
  width: 100%;
}
.swiper-container {
  width: 100%;
  height: 100%;
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
  height: 400px;
}
.swiper-slide img {
  width: 100%;
  height: 400px;
  object-fit: cover;
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

.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0;
}
.swiper-pagination {
  position: relative;
}
</style>