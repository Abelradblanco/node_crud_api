const express =  require('express')
const mongoose = require('mongoose');
const Product =  require('./models/product.model.js')
const app = express()

app.use(express.json())




app.get('/', (req, res) => {
    res.send("Hello From Node API");
});

app.get('/api/products', async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

app.get('/api/product/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(error){
        res.send(500).json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://abelb200:Password@nodecrudapi.86khovx.mongodb.net/Node-Crud-API?retryWrites=true&w=majority&appName=NodeCrudAPI")
.then(()=>{
    console.log("connected to the database!");
    app.listen(3000, ()=> {
        console.log('server is running on port 3000');
    });
})
.catch(()=> {
    console.log("connection failed!");
})


