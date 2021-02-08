<!--Home页面轮播图-->
<template>
<swiper :options="swiperOption">
  <swiper-slide v-for="item in banners" :key="item._id">
       <a href="/home">
         <img class="banner-img" :src="item.url"/>
        </a> 
     </swiper-slide>
    <!-- 指示点 -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
</swiper>
</template>
<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import swiper from 'swiper/bundle';
 export default {
    name:'HomeSwiper',
    components: {
      Swiper,
      SwiperSlide
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
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
      height: 450px;
      background: red;
    }
    /* .swiper-wrapper{
      height: 100%;
      width: 100%;
    } */
    /* .banner-img{
      width: 100%;
      height: 100%;
    } */
    .swiper-slide {
      /* width: 100%;
      height: 100%; */
      text-align: center;
      font-size: 18px;
      /* background: #fff; */

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
    --swiper-pagination-color: #00ff33;
  }
</style>