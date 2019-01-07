<template>
  <div class="courseDet"> 
    <div class="back" @click="back"><i class="iconfont">&#xe79e;</i></div>
    <img :src="courseDet.videoSrc" alt="">
    <div class="det mainCon">
      <div class="author">
        <div><img :src="courseDet.authorHead" alt=""><p>{{courseDet.author}}</p></div>
        <span><i class="iconfont">&#xe767;</i> 关注</span>
      </div>
      <h4>{{courseDet.title}}</h4>
      <div class="msg">
        <!-- <el-collapse>
          <el-collapse-item>
            <template slot="title">
              1.3万人观看&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;详情<i class="iconfont">&#xe661;</i>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse> -->
        <div>              
          <div @click="toggle">{{courseDet.views}}万人观看&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;详情<i class="iconfont">&#xe661;</i></div> 
          <div class="intro" ref="intro">
            <p>{{courseDet.det}}</p>
          </div>
        </div>
      </div>
      <div class="actions">
        <i class="iconfont">&#xe64c;</i><!-- 收藏 -->
        <i class="iconfont">&#xe6f3;</i><!-- 分享 -->
      </div>
    </div>
    <div class="expend mainCon">
      <CourseH :hotCourses='hotCourses' :order='order'>
        <h2 slot="title">相关推荐</h2>
      </CourseH>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseH from '../base_components/CourseH.vue'
import {getHotCourse,getCourseDet} from '../api/home.js'

export default {
  data(){
    return {
      hotCourses:[],
      courseDet:{},
      flag: 1,
      order: 1
    }
  },
  name: '',
  components: {
    CourseH
  },
  methods:{
    async getHotCourses(){
      this.hotCourses = await getHotCourse()
      // console.log(this.hotCourses);
    },
    async CourseDet(){
      this.courseDet = await getCourseDet(this.courseId)
      console.log(this.courseDet);
    },
    toggle(el){
      el.path[0].classList.add('active');
      // 因为transition过渡height的值必须是固定值，不能是auto或者100%，所以只能出此下策
      if(this.flag){
        this.$refs.intro.style.height = this.$refs.intro.firstChild.clientHeight + 'px'; 
        this.flag = 0;
      }else{
        this.$refs.intro.style.height = 0 + 'px'; 
        this.flag = 1;
      }
    },
    back(){
      this.$router.go(-1);
    }
  },
  created(){    
    this.getHotCourses()
    this.CourseDet()
  },
  computed: {
    courseId(){
      // 这边的id是当时设置router-link传的params属性值
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
  .courseDet{
    position: relative;
    .back{
      position: absolute;
      top: 15px;
      left: 15px;
      i{
        font-size: 30px;
        color: rgba(45,45,45,.7)
      }
    }
    .det{
      margin: 30px auto;
      .author{
        display: flex;
        justify-content: space-between;
        align-items: center;
        >div{
          display: flex;
          align-items: center;
          flex: 1;
          img{
            width: 15%;
            border-radius: 50%;
            margin-right: 15px;
          }
          p{
            font-size: 24px;
            font-weight: bold;
          }
        }
        span{
          background-color: #454445;
          color: #fff;
          padding: 5px 10px;
          border-radius: 50px;
        }
      }
      >h4{
        font-weight: bold;
        margin: 25px 0;
      }
      .msg{
        i{
          margin-left: 5px;
          transition: all 5s ease;
          &.active{
            transform: rotateX(90deg);
          }
        }
        .intro{
          margin-top: 10px;
          height: 0;
          overflow: hidden;
          transition: height .5s ease;
        }
      }
      .actions{
        overflow: hidden;
        margin-top: 20px;
        i{
          float: right;
          font-size: 24px;
          margin-left: 15px;
        }
      }
    }
  }
</style>

