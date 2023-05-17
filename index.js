const bodyParser = require('body-parser');
require('./models/index');
const express = require('express');
const userCtrl = require('./controller/userController')
// const User= require('./models/user');
// const Users= require('./models/contact');
const PORT =5000;

app = express();
app.use(bodyParser.json());
app.get('/',function(req,res){
    res.send('Hello World');
})
app.post('/add', userCtrl.postUser)
app.get('/getAll', userCtrl.getUsers)
app.get('/get/:id', userCtrl.getUser)
app.delete('/delete/:id',userCtrl.deleteUser)
app.patch('/update/:id',userCtrl.updateUser)
// User.sync({force : true}); DROP TABLE IF EXISTS
// User.sync({alter : true});
// Users.sync({alter : true}) //Update table
//User.drop() delete table
app.listen(PORT, ()=>{
   console.log(`server running on http://localhost:${PORT}`) ;
})