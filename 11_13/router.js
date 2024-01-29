const express = require('express');

const router = express.Router()
const {MongoClient, MongoKerberosError} = require("mongodb")
const url = "mongodb+srv://aleksander:qwerty123@cluster0.zjmyj31.mongodb.net/?retryWrites=true&w=majority"


router.get('/messages',async(req,res) =>{
    try {
        const db =  await MongoClient.connect(url)

        const dbo = db.db("webowe")
        const resultt = await dbo.collection("contact").find().toArray()
        res.send(resultt)
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router;