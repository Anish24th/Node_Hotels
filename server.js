const express = require('express');
const app = express();
const db= require('./db');

const bodyParser=require('body-parser');   //body parser
app.use(bodyParser.json());          //everything will be saved in req.body

app.get('/', function (req, res) {
    res.send('Hello World')
});

//adding router files
const personRoute=require('./routes/PersonRoutes');  
const menuRoute=require('./routes/menuItemRoutes');  

//using routes
app.use('/person',personRoute);  
app.use('/menu',menuRoute);

app.listen(3000,()=>{
    console.log("Server is live")
})







// app.post('./person',(req,res)=>{
//    const data = req.body;

//    const newPerson = new Person(data);

//   newPerson.save((error,savedPerson)=>{
//      if(error){
//         console.log('Error saving person',error);
//         res.status(500).json({error: 'Internal server error'});
//      }
//      else{
//         consolelog("Data saved successfully"); 
//         res.status(200).json(savedPerson);
//      }
// })
// }).            cannot be used he tried to explain why