const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');

const adminRoutes=require('./Router/admin')
mongodbUrl="mongodb://localhost:27017/assessment";


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());
app.use(adminRoutes)


mongoose.connect(mongodbUrl,{useNewUrlParser:true}).then(res=>{
    console.log("Mongodb connected successfully");
    app.listen(5000);
    console.log("app is listening port:5000");
})






