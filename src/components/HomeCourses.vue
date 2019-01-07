<template>
  <div>
    <Swiper :swiperImg='swiperImg'></Swiper> 
    <div class="mainCon">
      <Dropdown/>
      <CourseH :hotCourses='hotCourses'>
        <div slot="title"><h2>热门直播</h2></div>
      </CourseH>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '../base_components/Swiper.vue'
import Dropdown from '../base_components/Dropdown.vue'
import CourseH from '../base_components/CourseH.vue'
import {getSwiperImg,getHotCourse} from '../api/home.js'

export default {
  data(){
    return {
      swiperImg:[],
      hotCourses:[]
    }
  },
  name: '',
  components: {
    Dropdown,CourseH,Swiper
  },
  methods: {
    async getSwiperImgs(){
      this.swiperImg = await getSwiperImg();
    },
    async getHotCourses(){
      this.hotCourses = await getHotCourse();
    }
  },
  created(){
    this.getSwiperImgs()
    this.getHotCourses()
  }
}
</script>

<style lang="scss" scoped>
 
</style>

