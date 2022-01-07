const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const bodyParser = require('body-parser');


//import route
const fs = require('./route/fsRoute');


const PORT = process.env.SERVER_PORT;


const app = express();


app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

app.get('',(req,res,next)=>{
    res.json('This is fs File editor (create,red,delete,rename) // i use this image delete')
})


mongoose.connect('mongodb://localhost:27017/marina').then(() => {
    app.listen(PORT, () => {
        console.log(`api  up and running ${PORT}`);
    });
}).catch(error => {
    console.log(error);
});


//link export ....................
app.use('/api/v1/fileDelete',fs);

/*http://localhost:3000/api/v1/room*/

