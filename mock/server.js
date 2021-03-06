const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

let swiperImg = require('./swiper')

function read(work,cb){
    fs.readFile('./'+work,'utf8',(err,data) => {
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
    let Id = parseInt(query.id)
    let pageIndex = parseInt(query.index)
    let tech = query.tech
    
    switch(req.method){
        case "GET":
        if(pathname === '/getSwiperImg'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            res.end(JSON.stringify(swiperImg));
        }
        if(pathname === '/getHotCourse'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            read('courseMeg.json',(courses) => {
                courses = courses.filter((item) => item.isHot).slice(0,3)
                // 因为res.end()传的参数必须是string或者Buffer类型，所以需要把read函数传的对象参数转为字符串
                res.end(JSON.stringify(courses));
            })
        }
        if(pathname === '/page'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            read('courseMeg.json',(courses) => {
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
            read('courseMeg.json',(courses) => {
                let course = courses.find((item) => item.courseId === Id)
                // 因为res.end()传的参数必须是string或者Buffer类型，所以需要把read函数传的对象参数转为字符串
                res.end(JSON.stringify(course));
            })
        }
        if(pathname === '/author'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            read('authorMsg.json',(authors) => {
                let hasMore = true
                if(authors.length <= pageIndex*4){
                    hasMore = false
                }
                if(tech === 'recommend'){
                    authors = authors.filter((item) => item.isRecommend)
                }else if(tech === 'new'){
                    authors = authors.slice(-10)
                }
                authors = authors.reverse().slice((pageIndex-1)*4,pageIndex*4)
                // 因为res.end()传的参数必须是string或者Buffer类型，所以需要把read函数传的对象参数转为字符串
                res.end(JSON.stringify({hasMore,authors}));
            })
        }
        if(pathname === '/getAuthorDet'){
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf8' });
            read('authorMsg.json',(authors) => {
                let author = authors.find((item) => item.authorId === Id)
                // 因为res.end()传的参数必须是string或者Buffer类型，所以需要把read函数传的对象参数转为字符串
                res.end(JSON.stringify(author));
            })
        }
    }
}).listen(3000,() => {
    console.log('app is running...');
})