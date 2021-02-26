<!--Home页面轮播图-->
<template>
  <swiper>
       <swiper-slide v-for="item in banners" :key="item._id">
         <a :href="item.link" target="_blank">
           <img class="swiper-img" :src="item.url" @load="imageLoad" alt="轮播图"/>
         </a>
     </swiper-slide>
    <!-- 指示点 -->
    <div class="swiper-pagination"  slot="pagination"></div>
</swiper>
   
  
</template>

<script>

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import swiper from 'swiper/bundle';
 export default {
    name:'HomeSwiper',
    components: {
      Swiper,
      SwiperSlide,
      // SwiperShow
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
        isload:false
      }
    },
    methods:{
      // swiper框架的配置
     swiperOption(){
      const myswiper = new swiper('.swiper-container',{
        slidesPerView: 'auto',
        centeredSlides:true,
        spaceBetween: 10,
        loop:true,
        speed:600, 
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
           disableOnInteraction: false,
          },
        grabCursor:true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
          },
        })
       },
                  // 监听轮播图的图片是否加载完成
          imageLoad(){    
            if(!this.isload){
            this.$emit('swiperimageLoad'); 
              this.isload=true;
            }
          }
    },
    updated(){
      this.swiperOption();
    }
  }
</script>

<style scoped>
@import '../../../../node_modules/swiper/swiper-bundle.min.css';
 .swiper-container {
     display: flex;
      width: 100%;
    }
    .swiper-img{
      width: 100%;
      height: 100%;
    }
      .swiper-container{
    --swiper-theme-color: #ff6600;
    /* --swiper-pagination-color: #00ff33; */
  }
</style>