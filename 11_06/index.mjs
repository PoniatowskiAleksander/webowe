import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
import * as bodyParser from 'body-parser';
import connection from "./connection.mjs";
import * as mysql from 'mysql';
import { PrismaClient } from "@prisma/client";
//const {PrismaClient} = require("@prisma/client")
import * as fs from 'fs';



const prisma = new PrismaClient();

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.use(express.json());

app.post('/kontakt', async (req, res) => {
    const body = req.body;
    const user = {
        name: body.name,
        email: body.email,
        subject: body.subject,
        content: body.content
    }

    await prisma.dane.create({data: user});
    /*
    let data = JSON.stringify(req.body)
    const sql = "insert into dane values (''" + data + "')";
    connection.query(sql,(err) =>{
        if (err) {
            console.log('blad')
        }
        else {
            console.log('gut')
        }
    });
    */
    res.redirect('/');
})

const students = [
    {"id": 1, "name": "John", "surname": "Doe", "email": "john.doe@example.com" },
    { "id": 2, "name": "Jane", "surname": "Smith", "email": "jane.smith@example.com" },
    { "id": 3, "name": "Michael", "surname": "Johnson", "email": "michael.johnson@example.com" },
    { "id": 4, "name": "Emily", "surname": "Brown", "email": "emily.brown@example.com" },
    { "id": 5, "name": "William", "surname": "Wilson", "email": "william.wilson@example.com" },
    { "id": 6, "name": "Olivia", "surname": "Davis", "email": "olivia.davis@example.com" },
    { "id": 7, "name": "James", "surname": "Martinez", "email": "james.martinez@example.com" },
    { "id": 8, "name": "Sophia", "surname": "Miller", "email": "sophia.miller@example.com" },
    { "id": 9, "name": "Ethan", "surname": "Garcia", "email": "ethan.garcia@example.com" },
    { "id": 10, "name": "Ava", "surname": "Lopez", "email": "ava.lopez@example.com" },
]

const subjects = [
    { "id": 1, "name": "Matematyka", "hoursAWeek": 5 },
    { "id": 2, "name": "Język angielski", "hoursAWeek": 4 },
    { "id": 3, "name": "Fizyka", "hoursAWeek": 3 },
    { "id": 4, "name": "Chemia", "hoursAWeek": 3 },
    { "id": 5, "name": "Historia", "hoursAWeek": 2 },
    { "id": 6, "name": "Informatyka", "hoursAWeek": 3 },
    { "id": 7, "name": "Biologia", "hoursAWeek": 2 },
    { "id": 8, "name": "Wychowanie fizyczne", "hoursAWeek": 2 },
    { "id": 9, "name": "Geografia", "hoursAWeek": 2 },
    { "id": 10, "name": "Sztuka", "hoursAWeek": 1 },
]

const err404 = {
    errorCode: 404,
    errorMessage: "NotFound",
}

let router = express.Router();

app.get('/kontakt', async (req, res) => {
    res.sendFile(`${__dirname}/kontakt.html`);
}) 

router.get('/api', (req, res) => {
    res.statusCode = 200;
    const resp = {
        "/api/students": "zwraca listę minimum 10 obiektów o strukturze",
        "/api/students:id": "zwraca studenta z określonym identyfikatorem lub 404",
        "/api/subjects": "zwraca listę minimum 10 przedmiotów szkolnych w formacie",
        "/api/subjects:id": " zwraca przedmiot z określonym identyfikatorem lub 404"
    }
    res.end(JSON.stringify(resp));
    //res.end()
})


router.get('/api/students', async (req, res) => {
    res.sendStatus = 200;
    /*
    const sql = "SELECT * from students";
    connection.query(sql,(err,result,fields) =>{
        console.log(JSON.stringify(result))
        console.log(err)
        res.json(result)
    })
    */

    let users = await prisma.students.findMany();
    res.json(users);
})

router.get('/api/subjects', async (req, res) => {
    res.sendStatus = 200;
    /*
    const sql = "SELECT * from subjects";
    connection.query(sql,(err,result,fields) =>{
        console.log(result)
        res.json(result)
    })
    */
    let users = await prisma.subject.findMany();
    res.json(users);
})

router.get('/api/subjects/:id', async (req, res) => {

    let id = Number(req.params.id);
    /*
    const sql = "SELECT * from subjects WHERE id='" + id.toString() + "'" ;
    connection.query(sql,(err,result,fields) =>{
        console.log(result)
        res.json(result)
        if (result.length < 1) {
            res.sendStatus(404);
        }
        else {
            res.sendStatus(200);
        }
    })
    */

    const exactStudent = await prisma.subjects.findUnique({
        where: {
            id: id
        }
    });

    if (exactStudent)
        res.json(exactStudent);
    else {
        res.sendStatus(404);
        return 0;
    }

})

router.get('/api/students/:id', async (req, res) => {
    let id = Number(req.params.id)

    const exactStudent = await prisma.students.findUnique({
        where: {
            id: id
        }
    });

    if (exactStudent)
        res.json(exactStudent);
    else {
        res.sendStatus(404);
        return 0;
    }

    /*
    const sql = "SELECT * from students WHERE id='" + id.toString() + "'" ;
    connection.query(sql,(err,result,fields) =>{
        console.log(result)
        res.json(result)
        if (result.length < 1) {
            res.sendStatus(404);
        }
        else {
            res.sendStatus(200);
        }
    })
    */
})

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

