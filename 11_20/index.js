const express = require('express');
const {MongoClient, MongoKerberosError} = require('mongodb');
const test = require('./router.js');
const app = express();
const PORT = 3000;
const url = 'mongodb+srv://aleksander:qwerty123@cluster0.zjmyj31.mongodb.net/?retryWrites=true&w=majority'

app.use(express.static('public'));
app.use(express.json);
app.use(express.urlencoded({extended: true}))

connection.connect()






