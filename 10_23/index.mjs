import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
import * as bodyParser from 'body-parser';


const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/kontakt', (req, res) => {
    res.sendFile(`${__dirname}/kontakt.html`)
});


app.use(express.json());

app.post('/kontakt', (req, res) => {
    console.log(JSON.stringify(req.body));
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


router.get('/api/students', (req, res) => {
    res.statusCode = 200;
    res.end(JSON.stringify(students))
})

router.get('/api/subjects', (req, res) => {
    res.statusCode = 200;
    res.end(JSON.stringify(subjects))
})

router.get('/api/subjects/:id', (req, res) => {
    res.statusCode = 200;
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].id == req.params.id) {
            res.json(subjects[i])
            return

        }
    }
    res.statusCode = 404;

    res.end(JSON.stringify(err404));
})

router.get('/api/students/:id', (req, res) => {
    res.statusCode = 200;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == req.params.id) {
            res.json(students[i])
            return

        }
    }
    res.statusCode = 404;

    res.end(JSON.stringify(err404))
})

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

