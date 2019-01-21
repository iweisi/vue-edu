<template>
    <div class="tabs">
        <router-link to='5'>全部老师</router-link> 
        <span>|</span>
        <router-link to='5/2'>推荐老师</router-link>
        <span>|</span>
        <router-link to='5/3'>最新老师</router-link>
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

