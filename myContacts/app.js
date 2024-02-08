const express = require("express");
const app = express();


// get 요청으로 해당 url에 `Hello Node`출력
app.get("/",(req, res) => {
    res.send("Hello Node");
});


app.use("/contacts", require("./routes/contactRoute"));

app.listen(3000, () => {
    console.log("서버 실행 중");
});