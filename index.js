require('dotenv').config();
const express = require('express');
// const bcrypt = require('bcrypt');


// var jwt = require('jsonwebtoken');




require("./db/conn");   //database connection

//Define Model
// const Student = require('./model/student');
const User = require("./model/user");
// const Image=require("./model/image");

const app = express();
app.use(express.json({}));

port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Router
// const StudentRouter = require("./routers/student");
// app.use(StudentRouter)

const UserRouter=require("./routers/auth");
app.use(UserRouter)

// const ImageRouter=require("./routers/image");
// app.use(ImageRouter)

app.listen(port, () => {
    console.log(`Server is run: ${port}`);
})