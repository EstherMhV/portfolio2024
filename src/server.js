
const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose")
mongoose.connect('mongodb://0.0.0.0:27017/portfolio');


;



app.use(express.urlencoded());
app.use(express.json());

const skillRoute = require('./routes/skillRoute');
app.use('/skills', skillRoute);

const experienceRoute = require('./routes/experienceRoute');
app.use('/expereinces', experienceRoute);

const educationRoute = require('./routes/educationRoute');
app.use('/education', educationRoute);

const aboutRoute = require('./routes/aboutRoute');
app.use('/about', aboutRoute);

const projectLinkRoute = require('./routes/projectLinkRoute');
app.use('/projects', projectLinkRoute);




app.listen(port);