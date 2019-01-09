<template>
  <div class="course">
    <slot name="title"></slot>
    <div class="course-con">
        <router-link v-for="item in courses" :key="item.courseId" :to='{name:"courseDet",params:{id:item.courseId}}' tag='div' class="course-list">
            <div class="img"><img :src="item.src" alt=""></div>
            <div class="title">
                <h4>{{item.title}}</h4>
                <div>
                    <span><i class="iconfont">&#xe74f;</i>{{item.views}}万</span>
                </div>
            </div>
        </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: '',
  components: {
    
  },
  props:['courses']
}
</script>

<style lang="scss" scoped>
.course{
    margin: 50px auto;
    h2{
        font-weight: bold;
    }
    .course-con{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        >div{
            display: flex;
            flex-direction: column;
            margin-top: 30px;
            &.course-list{
                width: 45%;
            }
            .title{
                h4{
                    text-overflow: ellipsis;        
                    display:-webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient:vertical;
                    margin-bottom: 10px;
                    font-weight: bold;
                }
                div{
                    font-size: 12px;
                    span{
                        background-color: #464646;
                        border-radius: 6px;
                        color: #fff;
                        padding: 2px 5px;
                        margin-right: 8px;
                        i{
                            font-size: 10px;
                            margin-right: 2px;
                        }
                    }
                }          
            }
            .img{
                width: 100%;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 10px 20px #ccc;
                height: 73px;
                margin-bottom: 20px;
            }
        }
    }
}
</style>

