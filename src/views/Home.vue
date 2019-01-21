<template>
  <div class="home">
    <HomeHeader></HomeHeader> 
    <div class="homeCon">
      <!-- <keep-alive>
        <component :is='show'></component>
      </keep-alive> -->
      <router-view>
        <p class="footNav" slot="footNav"></p>
      </router-view>
    </div> 
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'
import HomeIndex from '../components/HomeIndex.vue'
import {pagination} from '../api/home.js'

export default {
  name: 'home',
  data(){
    return {
      show:'HomeIndex'
    }
  },
  components: {
    HomeHeader,HomeIndex
  },
  created(){
    this.$router.push('/home/1')
  },
  methods: {
    
  },
  created(){
    
  }
}
</script>

<style lang="scss" scoped>
  .homeCon>div{
    position: fixed;
    top: 100px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: auto;
  }
</style>

