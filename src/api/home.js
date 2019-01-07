import axios from 'axios'

// 设置公共地址
axios.defaults.baseURL = 'http://localhost:3000';

// 设置拦截器
axios.interceptors.response.use((res)=>{
    // 先进行预处理，再返回数据，只返回结果中的data数据
    return res.data;
});

// api
export let getSwiperImg = () => {
    return axios.get('/getSwiperImg')
}

export let getHotCourse = () => {
    return axios.get('/getHotCourse')
}

export let getCourseDet = (id) => {
    return axios.get(`/getCourseDet?id=${id}`)
}