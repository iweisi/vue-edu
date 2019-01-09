<template>
  <div>
    <Swiper :swiperImg='swiperImg'></Swiper> 
    <div class="mainCon">
      <div class="discount">
        <router-link to='/home'><i class="iconfont">&#xe816;</i><p>优惠券</p></router-link>
        <router-link to='/home'><i class="iconfont">&#xe7f4;</i><p>拼团活动</p></router-link>
        <router-link to='/home'><i class="iconfont">&#xe816;</i><p>课程推广</p></router-link>
        <router-link to='/home'><i class="iconfont">&#xe776;</i><p>会员专区</p></router-link>
      </div> 
      <CourseH :hotCourses='hotCourses' :order='order'>
        <div slot="title">
          <h2>精选课程</h2>
          <p><i class="iconfont">&#xe6a4;</i> 换一拨</p>
        </div>  
      </CourseH> 
      <CourseV :courses='courses'>
        <div slot="title">
          <h2><router-link to='/home'>吉他教学专区 ></router-link></h2>
        </div>  
      </CourseV> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '../base_components/Swiper.vue'
import CourseH from '../base_components/CourseH.vue'
import CourseV from '../base_components/CourseV.vue'
import {getSwiperImg,getHotCourse,pagination} from '../api/home.js'

export default {
  data(){
    return {
      swiperImg:[],
      hotCourses:[],
      order:0
      /* courses:[],
      pageIndex:1,
      hasMore:true */
    }
  },
  props:['courses'],
  name: '',
  components: {
    CourseH,CourseV,Swiper
  },
  methods:{
    async getSwiperImgs(){
      this.swiperImg = await getSwiperImg()
    },
    async getHotCourses(){
      this.hotCourses = await getHotCourse()
    },
  },
  created(){
    this.getSwiperImgs()
    this.getHotCourses()
  }
}
</script>

<style lang="scss" scoped>
  .discount{
      display: flex;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
    a{
      i{
        font-size: 30px;
        color: #E4C04D;
      }
    }
  }
</style>

