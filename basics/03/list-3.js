// fs 모듈의 readdir 함수의 withFileTypes 옵션 연습하기 ( 결과 비교 파일 : 03\results\list-3.js)

const fs = require("fs");

// 파일 읽기 
fs.readFile("./example.txt", "utf8", (err, data)=> {
    if(err){
        console.log(err);
    }
    console.log(data);
});