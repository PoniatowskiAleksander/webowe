var express = require('express');
var customer = require('./src/routes/customer.js');
var ssr = require('./src/routes/ssr.js')

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

prisma.students.findMany().then((data)=> {
    console.log(data)
});

