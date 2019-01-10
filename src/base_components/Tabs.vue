<template>
    <div class="tabs">
        <router-link to='5'>全部课程</router-link> 
        <span>|</span>
        <router-link to='5/2'>折扣专区</router-link>
        <span>|</span>
        <router-link to='5/3'>免费专区</router-link>
    </div>
</template>

<style lang="scss" scoped>
    .tabs{
        display: flex;
        justify-content: space-around;
        margin: 20px auto;
        overflow: hidden;
        a{
            position: relative;
            &.a-active{
                color: #000;
                font-weight: bold;
            }
        }
    }
</style>

