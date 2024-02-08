// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)

const http = require("http");

// 서버 생성 
const server = http.createServer((req, res) => {
    // 응답 헤더 - 텍스트 타입 
    res.setHeader("Content-type", "text/plain");
    // 응답 본문(내용)
    res.write("Hello Node");
    // 응답 종료
    res.end();
});

// 3000포트에 서버 실행
server.listen(3000, () =>{
    console.log("서버가 실행 중");
});