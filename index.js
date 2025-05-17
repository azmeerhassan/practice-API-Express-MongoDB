const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect("mongodb+srv://azmeerhassanammad:iIF1XbagRo6eFtYb@practice-api-express-mo.8asxe2c.mongodb.net/practice-API-Express-MongoDB?retryWrites=true&w=majority&appName=practice-API-Express-MongoDB")
.then(()=>{
    console.log("connected to database!");
    app.listen(3000, (req, res)=>{
    console.log("Server is running on port 3000");   
})
})
.catch(()=>{
    console.log("connection failed!"); 
})
