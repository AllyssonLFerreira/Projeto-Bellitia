const express = require('express');
const app = express ();
const consign = require('consign');
const {Adress, Establishment, Schedule, User, Professional, Service} = require('./models');

app.use(express.json())

consign()
    .include('./api')
    .then('./routes')
    .into(app)

app.listen ( 5000, () => { console.log('servidor funcionando') } );