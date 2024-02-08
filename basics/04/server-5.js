// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");

// 서버 생성 
const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");
    
    // req.url : 요청 경로
    // req.method : 요청 메소드 

    const { url, method } = req;
    // const url = req.url;
    // const method = req.method;

    if(method==="GET" && url==="/home"){
        res.write("HOME");
        res.end();
    }else if(method==="GET" && url==="/about"){
        res.end("ABOUT");
    } else{
        res.end("Not Found");
    }
    
});

// 3000포트에 서버 실행
server.listen(3000, () =>{
    console.log("서버가 실행 중");
});