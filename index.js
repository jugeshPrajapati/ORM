const bodyParser = require('body-parser');
require('./models/index');
const express = require('express');
const userCtrl = require('./controller/userController')
// const User= require('./models/user');
// const Users= require('./models/contact');
// const {createLogger,transports,format} = require("winston");
//express-winston is a winston logger wraper
const expressWinston =require('express-winston')
const {codeErrorLogs,serverLogs} =require ('./codeErrorLog');//load logger
const PORT =5000;
app = express();
app.use(bodyParser.json()); //parse incoming HTTP request bodies as JSON data
app.use(expressWinston.logger({
    winstonInstance:serverLogs,
    statusLevels:true})); // expresswinston logger with winston instance
// app.use(expressWinston.logger()) //simple logger should come first than routes
app.get('/',function(req,res){
    // res.send('Hello World');
    // res.sendStatus(200)
    res.status(200).json('Hello World');
})
app.get('/400',function(req,res){
    // res.send('Hello World 400');
    res.status(400).json('Hello World 400');
})
app.get('/500',function(req,res){
    // res.send('Hello World 500');
    res.status(500).json('Hello World 500');
})
app.get('/error',function(req,res){
    throw new Error('custom error');
})
app.use(expressWinston.errorLogger({winstonInstance:codeErrorLogs})) //errorLogger comes after routes 

// app.post('/add', userCtrl.postUser)
// app.get('/getAll', userCtrl.getUsers)
// app.get('/get/:id', userCtrl.getUser)
// app.delete('/delete/:id',userCtrl.deleteUser)
// app.patch('/update/:id',userCtrl.updateUser)
// app.get('/one-to-one', userCtrl.oneToOneUser)
// User.sync({force : true}); DROP TABLE IF EXISTS
// User.sync({alter : true});
// Users.sync({alter : true}) //Update table
//User.drop() delete table
app.listen(PORT, ()=>{
   console.log(`server running on http://localhost:${PORT}`) ;
})