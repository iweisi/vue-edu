<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div class="footNav"></div> -->
    <!-- 利用在路由配置上meta属性，选择性显示隐藏底部导航
      因为首页路由配置了默认跳转到/home/1，导致/home上找不到meta，
      所以要在matched[0].meta下找才有showFooter -->
    <FootNav v-show="$route.matched[0].meta.showFooter"/>
  </div>
</template>

<script>
import FootNav from './base_components/FooterNav'
export default {
  components: {
    FootNav
  },
}
</script>

<style scoped lang="scss">
  #main-con{
    width: 90%;
    margin: 0 auto;
  }
</style>
