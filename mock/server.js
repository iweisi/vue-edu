const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

let swiperImg = require('./swiper')

function read(cb){
    fs.readFile('./courseMeg.json','utf8',(err,data) => {
        if(err || data.length === 0){
            cb([])
        }else{
            // console.log(typeof data);
            // 因为上面readFile方法加了‘utf8’,将data转为了字符串，所以这边需要用parse解析出json对象
            cb(JSON.parse(data))
        }
    })
}


http.createServer((req,res) => { 
    // 设置响应头，解决跨域问题
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    
    // 获取请求地址和参数
    let {pathname,query} = url.parse(req.url,true)  
    let courseId = parseInt(query.id)
    let pageIndex = parseInt(query.index)
    
    switch(req.method){
        case "GET":
        if(pathname === '/getSwiperImg'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            res.end(JSON.stringify(swiperImg));
        }
        if(pathname === '/getHotCourse'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            read((courses) => {
                courses = courses.filter((item) => item.isHot).slice(0,3)
                // 因为res.end()传的参数必须是string或者Buffer类型，所以需要把read函数传的对象参数转为字符串
                res.end(JSON.stringify(courses));
            })
        }
        if(pathname === '/page'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            read((courses) => {
                let hasMore = true
                if(courses.length <= pageIndex*4){
                    hasMore = false
                }
                courses = courses.reverse().slice((pageIndex-1)*4,pageIndex*4)
                // 因为res.end()传的参数必须是string或者Buffer类型，所以需要把read函数传的对象参数转为字符串
                res.end(JSON.stringify({hasMore,courses}));
            })
        }
        if(pathname === '/getCourseDet'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            read((courses) => {
                let course = courses.find((item) => item.courseId === courseId)
                // 因为res.end()传的参数必须是string或者Buffer类型，所以需要把read函数传的对象参数转为字符串
                res.end(JSON.stringify(course));
            })
        }
    }
}).listen(3000,() => {
    console.log('app is running...');
})