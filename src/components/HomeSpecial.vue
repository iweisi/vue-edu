<template>
  <div class="mainCon" @scroll="more" ref="authors">
    <div class="tabs">
        <p @click="tab('all',1)" :class="{active : num===1? true:false}">全部老师</p> 
        <span>|</span>
        <p @click="tab('recommend',2)" :class="{active : num===2? true:false}">推荐老师</p>
        <span>|</span>
        <p @click="tab('new',3)" :class="{active : num===3? true:false}">最新老师</p>
    </div>
    <ul class="authorList">
      <li v-for="(item,index) in authors" :key="index" ref="authorList">
        <router-link tag='div' :to='{name:"authorDet",params:{id:item.authorId}}'>
          <!-- <img src="../assets/1546848138(1).jpg" alt=""> -->
          <img :src="item.authorHead" alt="">
          <h3>{{item.author}}</h3>
          <div class="fens"><span>{{item.fans}}</span> 粉丝</div>
          <p>{{item.authorIntro}}</p>
          <div class="isRecommend active" v-if="item.isFollow">已关注</div>
          <div class="isRecommend" @click.stop="recommend" v-else><i class="iconfont">&#xe767;</i> 关注</div>
        </router-link>
      </li>
    </ul>
    <slot name="footNav"></slot>
  </div>
</template>

<script>
// @ is an alias to /src
// import Tabs from '../base_components/Tabs.vue'
import {getAuthors} from '../api/home.js'

let flag = true
let top = [0,0]
let techtype = null;
export default {
  data(){
    return {
      authors: [],
      index: 1,
      hasMore: true,
      tech : 'all',
      num : 1
    }
  },
  name: '',
  components: {
    
  },
  methods: {
    // 瀑布流布局
    waterFollow(){
      // console.log(this.$refs);  
      let lis = this.$refs.authorList
      // console.log(lis);
      lis.forEach((el,index) => {
        // 需要获取到top数组中最小值的值和位置
        // 因为每次加载四个老师，index>=(this.index-1)*4过滤掉之前已经加载过的老师
        if(index>=(this.index-1)*4){
          let min = Math.min(...top)
          let minIndex = top.indexOf(min)
          el.style.top = min + 'px'
          el.style.left = minIndex*50 + 2.5 + '%'
          top[minIndex] += el.clientHeight + 50
          el.parentNode.style.height = top[minIndex] + 'px'
          /* console.log(el.offsetTop);
          console.log(`${index}---:最小值${min} + 元素高度${el.clientHeight} + 50 = ${top[minIndex]}`);
          console.log('-----------------------'); */
        }
      });
    },
    // 上拉加载
    more(){
      let {scrollHeight,scrollTop,clientHeight} = this.$refs.authors
      // 开关为真 且 1滚动体高度<=2滚动高度+3可视高度+20   （一般1=2+3，设置20px差值）
      if(flag && scrollHeight <= scrollTop + clientHeight +20){
        flag = false
        this.index++
        this.getAuthor()
      }
    },
    // 切换老师选项
    tab(tech,num){
      this.num = num
      this.tech = tech
      top = [0,0]
      this.authors = []
      this.index = 1
      this.hasMore = true
      this.getAuthor()
    },
    async getAuthor(){
      let {hasMore,authors} = await getAuthors(this.index,this.tech)
      this.authors = [...this.authors,...authors]
      this.hasMore = hasMore
      flag = true
      if(!this.hasMore){
        flag = false
      }
    }
  },
  created(){
    top = [0,0]
    this.getAuthor()
  },
  updated(){
    this.waterFollow()
  }
}
</script>

<style lang="scss" scoped>
  .tabs .active{
    font-weight: bold;
    color: #000;
  }
  .authorList{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    li{
      position: absolute;
      width: 45%;
      text-align: center;
      padding: 15px;
      >div{
        img{
          border-radius: 50%;
          width: 50%;
          margin: 10px auto 20px;
        }
        h3{
          font-size: 18px;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        div{
          margin: 15px auto 30px;
          span{
            color: #E4C04D;
          }
          &.isRecommend{
            position: absolute;
            top: 95%;
            left: 50%;
            border-radius: 100px;
            background-color: #454545;
            padding: 7px 0;
            color: #fff;
            width: 50%;
            margin-left: -25%;
            &.active{
              background-color: #979797;
            }
          }
        }
        p{
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          display:-webkit-box;
          -webkit-line-clamp:4;
          -webkit-box-orient:vertical;
        }
      }
      &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 86%;
        left: 0;
        top: 20%;
        border-radius: 15px;
        box-shadow: 0 0 20px rgba(0,0,0,.1);
        z-index: -1;
      }
    }
  }
</style>

