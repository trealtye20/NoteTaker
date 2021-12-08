const router = require("express").Router();
const db =  require("../db/db.json")
const { v1: uuidv1} = require('uuid');
const fs = require('fs')

router.get("/notes", (req, res) => {
    return res.json(db)
     
})

router.post("/notes", (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv1()
    }

    db.push(note);
    console.log(req.body)
    // db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), err => {
        if (err) throw err;
    })
    return res.json(db)
})

module.exports = router;