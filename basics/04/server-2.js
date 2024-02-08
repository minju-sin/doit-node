// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)

const http = require("http");

// 서버 생성 
const server = http.createServer((req, res) => {
    console.log(req);
});

// 3000포트에 서버 실행
server.listen(3000, () =>{
    console.log("서버가 실행 중");
});