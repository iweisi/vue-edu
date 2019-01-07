<template>
  <div class="head mainCon">
    <div class="headNav">
        <router-link to='/home/1'>推荐</router-link>
        <router-link to='/home/2'>直播</router-link>
        <router-link to='/home/3'>视频</router-link>
        <router-link to='/home/4'>音频</router-link>
        <router-link to='/home/5'>专栏</router-link>
        <router-link to='/home/6'>会员</router-link>
    </div>
    <div class="headSerch">
        <div>
            <i class="iconfont">&#xe6fe;</i>
            <input type="text" placeholder="小提琴初学者">
        </div>
        <i class="iconfont">&#xe70a;</i>
    </div>
  </div>
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
  .headNav{
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    .a-active{
      font-size: 24px;
      font-weight: bold;
      color: #000;
      position: relative;
      &::after{
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        margin-left: -10%;
        width: 20%;
        height: 2px;
        background-color: #000;
        border-radius: 5px;
      }
    }
  }
  .headSerch{
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      width: 85%;
      position: relative;
      input{
        display: block;
        background-color: #F3F3F3;
        border-radius: 50px;
        width: 100%;
        padding: 8px 30px 8px 4.5em;
      }
      i{
        position: absolute;
        left: 15%;
        top: 28%;
      }
    }
    >i{
      font-size: 25px;
    }
  }
</style>

