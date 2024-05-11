require('dotenv').config();

const express =  require('express')
const mongoose = require('mongoose');
const Product =  require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');
const app = express()

//middlewear
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello From Node API");
});


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("connected to the database!");
    app.listen(3000, ()=> {
        console.log('server is running on port 3000');
    });
})
.catch(()=> {
    console.log("connection failed!");
})


