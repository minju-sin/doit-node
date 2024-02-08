const mongoose = require("mongoose");

// 새로운 객체 인스터스 생성 
const contactSchema = new mongoose.Schema(
 {
    name: {
        // 타입과 필수속성 
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String,
        required: [true, "전화번호는 꼭 기입해 주세요."]
    }
 },
 {
    // timestamps는 자료가 작성, 수정될 때 자동으로 시간을 기록해주는 속성 
    timestamps: true
 }
);

// 스키마 -> 모델 
// mongoose.model(모델명, 스키마명);
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;