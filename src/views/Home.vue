<template>
  <div class="home">
    <HomeHeader></HomeHeader> 
    <router-view/>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'

export default {
  name: 'home',
  components: {
    HomeHeader
  },
  created(){
    this.$router.push('/home/1')
  }
}
</script>

<style lang="scss" scoped>
  
</style>

