<template>
  <div class="authorDet"> 
    <div class="back" @click="back"><i class="iconfont">&#xe79e;</i></div>
    <img src="../assets/1548040351(1).jpg" alt="">
    <div class="det mainCon">
        <div class="param">
            <div class="authorHead"><img src="../assets/1546848138(1).jpg" alt=""></div>
            <div><p>{{authorDet.fans}}万</p><em>点赞</em></div>    
            <div><p>{{authorDet.fans}}万</p><em>粉丝</em></div>    
            <div><p>{{authorDet.authorId}}</p><em>关注</em></div>    
        </div>
        <div class="authorInfo">
            <h4>{{authorDet.author}}</h4>
            <p>{{authorDet.authorIntro}}</p>
            <div>
                <span v-if="authorDet.isFollow">已关注</span>
                <span v-else><i class="iconfont">&#xe767;</i> 关注</span>
                <span><i class="iconfont">&#xe660;</i> 私信</span>
            </div>
        </div>  
        <div class="authorWorks">
            <!-- 用swiper模拟出tab效果，在slide上添加class="swiper-no-swiping"禁止切换
            自定义分页模拟tab标签 -->
            <swiper :options="swiperOption">
                <swiper-slide class="swiper-no-swiping">
                    <ul>
                        <router-link :to="{name:'courseDet',params:{id:authorDet.live.liveId}}" tag='li'>
                            <img src="../assets/1546846971(1).jpg" alt="">
                        </router-link>
                    </ul>
                </swiper-slide>
                <swiper-slide class="swiper-no-swiping">
                    <ul>
                        <router-link v-for="item in authorDet.video" :to="{name:'courseDet',params:{id:item.courseId}}" :key="item.courseId" tag='li'>
                            <img src="../assets/1546846971(1).jpg" alt="">
                        </router-link>
                    </ul>
                </swiper-slide>
                <swiper-slide class="swiper-no-swiping">
                    <ul>
                        <router-link v-for="item in authorDet.video" :to="{name:'courseDet',params:{id:item.courseId}}" :key="item.courseId" tag='li'>
                            <img src="../assets/1546846971(1).jpg" alt="">
                        </router-link>
                    </ul>
                </swiper-slide>
                <swiper-slide class="swiper-no-swiping">
                    <ul>
                        <router-link v-for="item in authorDet.ImageText" :to="{name:'courseDet',params:{id:item.courseId}}" :key="item.courseId" tag='li'>
                            <img src="../assets/1546846971(1).jpg" alt="">
                        </router-link>
                    </ul>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
    <p class="footNav"></p>
  </div>
</template>

<script>
// @ is an alias to /src
import {getAuthorDet} from '../api/home.js'

export default {
  data(){
    return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                let name = ['直播','视频','音频','图文'];
                return `<span class=${className} style='opacity:.5;width:25%;border-radius: 0;height: auto;background-color: #fff;'>${name[index]}</span>`;
            }
          }
        },
        authorDet:{}
    }
  },
  name: '',
  components: {
    
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    async getAuthor(){
        this.authorDet = await getAuthorDet(this.authorId)
        console.log(this.authorDet);
    }
  },
  created(){    
      this.getAuthor()
  },
  computed: {
    // 获取请求的id
    authorId(){
      // 这边的id是当时设置router-link中params传的key（id）
      console.log(this.$route);
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
  .authorDet{
    position: relative;
    .back{
      position: absolute;
      top: 15px;
      left: 5%;
      i{
        font-size: 30px;
        color: rgba(45,45,45,.7)
      }
    }
    .det{
        .param{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: -50px;
            .authorHead{
                border-radius: 50%;
                overflow: hidden;
            }
            div{
                text-align: center;
                p{
                    font-size: 20px;
                    font-weight: bold;
                }
            }
        }
        .authorInfo{
            padding: 40px 0;
            border-bottom: 1px solid #eee;
            h4{
                font-size: 30px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            div{
                margin-top: 15px;
                span{
                    display: inline-block;
                    border-radius: 50px;
                    background-color: #454545;
                    padding: 7px 15px;
                    color: #fff;
                    margin-right: 15px;
                    font-size: 16px;
                }
            }
        }
        .authorWorks{
            margin-top: 40px;
            ul{
                li{
                    border-radius: 25px;
                    overflow: hidden;
                    margin-bottom: 20px;
                }
            }
            .swiper-container{
                padding-top: 40px;
                .swiper-pagination{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    bottom: calc(100% - 20px);
                    // 将激活样式写在base里面
                }
            }
            
        }
    }
  }
</style>

