const router = require("express").Router();
const dbFile =  require("../db/db.json")
const { v1: uuidv1} = require('uuid');
const fs = require('fs')

router.get("/notes", (req, res) => {
    return res.json(dbFile)
     
})

router.post("/notes", (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv1()
    }

    dbFile.push(note);
    console.log(req.body)
    
    fs.writeFile("./db/db.json", JSON.stringify(dbFile), err => {
        if (err) throw err;
        console.log(err)
    })
    return res.json(dbFile)
})

module.exports = router;