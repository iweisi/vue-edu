<template>
  <div class="course">
    <slot name="title"></slot>
    <router-link v-for="item in hotCourses" :to='{name:"courseDet",params:{id:item.courseId}}' tag='div' :key="item.courseId">
        <div class="title" :style="{order:order}">
            <h4>{{item.title}}</h4>
            <div>
                <span><i class="iconfont">&#xe74f;</i>{{item.views}}万</span>
                {{item.author}}
            </div>
        </div>
        <div class="img"><img :src="item.src" alt=""></div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: '',
  components: {
    
  },
  props:['hotCourses','order']
}
</script>

<style lang="scss" scoped>
.course{
    margin: 50px auto;
    >h2{
        font-weight: bold;
    }
    >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px auto;
        .title{
            width: 50%;
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
            width: 40%;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 6px 15px #ccc;
            height: 73px;
        }
    }
}

</style>

