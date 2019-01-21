<template>
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
</template>

<script>
// @ is an alias to /src

export default {
  name: '',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
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

