const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/api/products', async(req, res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/products', async(req, res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get('/api/products/:id', async(req, res)=>{
    try {
      const {id} = req.params
    const product = await Product.findById(id)
    res.status(200).json(product)  
    } catch (error) {
        res.json(500).json({message:error.message})
    }
    
})

app.put('/api/products/:id', async(req, res)=>{
    try {
        const {id} = req.params
        const Product = await Product.findByIdAndUpdate(id, req.body)
        if(!Product)
        {
            return res.status(404).json({message:"product not found"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
      res.status(500).json({message: error.message})  
    }
})

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
