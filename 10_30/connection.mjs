import express from 'express'
import { createConnection } from 'mysql'


var connection = createConnection({
    host: '127.0.0.1',
    user: 'newuser',
    password: '',
    database: 'webowe'
});

export default connection