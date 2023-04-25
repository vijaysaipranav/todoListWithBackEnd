// get express instance
const express = require('express');
const port = 8000;

// require mongoose 
const mongoose= require('mongoose');



// create express app
const app = express();

// setup our view engine
app.set('view engine','ejs');
app.set('views','./views');


// connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/todo_list_db',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection;


// add the middleware before the routes
app.use(express.json());
// middleware 1 this only reads the data from the forms which we submited
app.use(express.urlencoded({extended:false}));
// middleware 2 to use styling to our page
app.use(express.static('assets'));

//import routes
const userRoute = require('./routes/task');
app.use('/',userRoute);







// to check if the database is connected or not
db.on('open',()=>{
    console.log('db is connected');

})


// listen to port
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
})