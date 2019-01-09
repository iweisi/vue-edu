<template>
  <div class="home">
    <HomeHeader></HomeHeader> 
    <div class="homeCon" @scroll="more" ref="course">
      <router-view :courses='courses'></router-view>
      <div class="footNav"></div>
    </div> 
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'
import {pagination} from '../api/home.js'

let flag = true
export default {
  name: 'home',
  data(){
    return {
      courses:[],
      pageIndex:1,
      hasMore:true
    }
  },
  components: {
    HomeHeader
  },
  created(){
    this.$router.push('/home/1')
  },
  methods: {
    more(){
      /* 上拉加载'三剑客'：1+2 = 3
        1.clientHeight(可视区域的高度),
        2.scrollTop(滚动的距离),
        3.scrollHeight(主体总高度) */
      // console.log(this.$refs);
      let {scrollHeight,scrollTop,clientHeight} = this.$refs.course
      if(scrollHeight <= scrollTop + clientHeight + 20 && flag){
        flag = false
        this.pageIndex++
        // console.log(this.pageIndex);
        this.getCourses()
        // console.log(this.courses);
      }
    },
    async getCourses(){
      let {courses,hasMore} = await pagination(this.pageIndex)
      this.courses = [...this.courses,...courses]
      this.hasMore = hasMore
      flag = true
      if(!this.hasMore){
          flag = false
      }
    }
  },
  created(){
    this.getCourses()
  }
}
</script>

<style lang="scss" scoped>
  .homeCon{
    position: fixed;
    top: 95px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    overflow: auto;
  }
</style>

