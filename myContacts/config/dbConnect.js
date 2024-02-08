const mongoose = require("mongoose");
require("dotenv").config();

// async, await 비동기 처리로 DB애 접속하는 코드
const dbConnect = async () => {
    try{
        // mongoose 모듈에서 connect 함수를 이용해서 데이터베이스에 접속을 하게 된다. 
        const connect = mongoose.connect(process.env.DB_CONNECT);
        console.log("DB Connected");
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;