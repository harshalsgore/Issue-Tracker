const mongoose = require('mongoose');
const url = 'mongodb+srv://harshalsgore:YLWXQoTvv7T5RphA@cluster0.uucjlco.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url);
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  