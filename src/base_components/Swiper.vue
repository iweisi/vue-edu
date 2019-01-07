<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperImg" :key="index"><img :src="slide" alt=""></swiper-slide>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
            slidesPerView: 'auto',          
            spaceBetween: 40,
            centeredSlides: true
        }
      }
    },
    props: ['swiperImg'],
    mounted() {
      
    }
  }
</script>

<style lang="scss" scoped>
    .swiper-container{
        height: 150px;
         margin: 20px auto;
         padding-top: 15px;
        .swiper-slide{
            width: 70%;
            border-radius: 6px;
            transition: all .5s linear; 
            overflow: hidden;
        }
        .swiper-slide-active{
            transform: scale(1.2);
        }
    }
</style>
