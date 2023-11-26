import express from 'express'
import { createConnection } from 'mysql'


const connection = createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'webowe',
    port: 3306
});


connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
})

export default connection
