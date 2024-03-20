
const express = require('express')
const app = express()
const port = 3000
const env = require('.env.local')

const mongoose = require("mongoose")
mongoose.connect(env.mongoDB);




app.use(express.urlencoded());
app.use(express.json());

const aboutRoute = require('./routes/aboutRoute');
app.use('/about', aboutRoute);

const skillRoute = require('./routes/skillRoute');
app.use('/skills', skillRoute);

const projectRoute = require('./routes/projectRoute');
app.use('/projects', projectRoute);

const educationRoute = require('./routes/educationRoute');
app.use('/education', educationRoute);





app.listen(port);