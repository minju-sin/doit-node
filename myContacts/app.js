const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();

// DB 연결하기 
dbConnect();

// get 요청으로 해당 url에 `Hello Node`출력
app.get("/",(req, res) => {
    res.send("Hello Node");
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/contacts", require("./routes/contactRoute"));

app.listen(3000, () => {
    console.log("서버 실행 중");
});