const express  = require("express")
const {MongoClient, MongoKerberosError} = require("mongodb")
const app = express()
const PORT = 3000;
const url = "mongodb+srv://aleksander:qwerty123@cluster0.zjmyj31.mongodb.net/?retryWrites=true&w=majority"
const router = require('./router.js');

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/kontakt',async(req,res) =>{
    const body = req.body
    try {
        const db =  await MongoClient.connect(url)
        const dbo = db.db("webowe")
        if (body.name === "" ) {
            delete body.name
        } 
        try {
            await dbo.collection("contact").insertOne(body)
        }
        catch(err) {
            console.log(err)
        }
        await db.close()
    }
    catch(er) {
        console.log(er)
    }
    res.redirect(302, '/')
})


app.get('/',(req,res) => {
    res.sendFile(`${__dirname}/index.html`)
})


app.get('/kontakt',(req,res) =>{
    res.sendFile(`${__dirname}/kontakt.html`)
})


app.use('/api', router)


app.listen(PORT, ()=>{
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
})