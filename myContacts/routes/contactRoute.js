const express = require("express");
const router = express.Router();

// 연락처 가져오기 
router
.route("/")
    .get((req, res) => {
        res.send("Contacts Page");   
    })
    .post((req, res) => {
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