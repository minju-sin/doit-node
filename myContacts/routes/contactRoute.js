const express = require("express");
const getAllContacts = require("../controllers/contactController");
const router = express.Router();
const getAllContacts = require("../controllers/contactController");

// 연락처 가져오기 
router
.route("/")
    .get(getAllContacts)
    .post((req, res) => {
        console.log(req.body);
        const {name, email, phone} = req.body;
        if(!name || !email || !phone){
            return res.send("필수 값이 입력되지 않았습니다.");
        }
        res.send("Create Contacts");
    });

router
.route("/:id")
    .get((req, res) => {
        res.send(`View Contact for ID: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update Contact for ID: ${req.params.id}`);
    })
    .delete( (req, res) => {
        res.send(`Delete Contact for ID: ${req.params.id}`);
    });

    module.exports = router;