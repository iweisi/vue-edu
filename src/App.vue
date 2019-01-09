<template>
  <div id="app">
    <router-view/>
    <div class="footNav"></div>
    <div id="nav">
      <router-link to="/home"><i class="iconfont">&#xe6bb;</i>首页</router-link>
      <router-link to="/study"><i class="iconfont">&#xe742;</i>学习</router-link>
      <router-link to="/publish"><i class="iconfont" style="font-size:30px;">&#xe6d9;</i></router-link>
      <router-link to="/find"><i class="iconfont">&#xe73d;</i>发现</router-link>
      <router-link to="/my"><i class="iconfont">&#xe735;</i>我的</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    padding: 0 6%;
    z-index: 1000;
    border-top: 2px solid #F5F5F5;
    background-color: #fff;
    a{
       display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: column wrap;
      &.a-active{
        color: #E4C04D;
      }
      i{
        font-size: 24px;
      }
    }
  }
  #main-con{
    width: 90%;
    margin: 0 auto;
  }
</style>
