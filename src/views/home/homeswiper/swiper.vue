<template>
<swiper :options="swiperOption">
  <swiper-slide>
       <a href=""><img class="banner-img" src="~@/assets/img/user/user.svg" /></a> 
     </swiper-slide>
    <swiper-slide>
       <a href=""><img class="banner-img" src="~@/assets/img/user/useraf.svg" /></a>
    </swiper-slide>
    <!-- 指示点 -->
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
</template>
<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import swiper from 'swiper/bundle';
 export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption:{
        slidesPerView: 'auto',
        centeredSlides:true,
        spaceBetween: 10,
        loop:true,
        speed:600, 
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
           disableOnInteraction: true,
          },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
         },
       }
      }
    },
  }
</script>
<style scoped>
@import '../../../../node_modules/swiper/swiper-bundle.min.css';
 .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
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
      .swiper-container{
    /* --swiper-theme-color: #ff6600; */
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
</style>