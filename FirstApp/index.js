const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')

.then(() => {
        console.log("mongo connection open")
})
.catch(err => {
        console.log("oh no error")
        console.log(err)
})
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) =>{
        res.send("welcome to the homepage")
})

app.get('/products', async (req, res) =>{
        const products = await Product.find({})
        res.render('products/index', {products})
})

app.get('/products/new', (req, res) => {
        res.render('products/new')
})

app.post('/products', async (req, res) => {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async(req, res) => {
        const {id} = req.params;
        Product.findById(id);
        const product = await Product.findById(id)
        res.render('products/show', {product})
})

app.get('/products/:id/edit', async (req, res) => {
        const {id} = req.params
        const product = await Product.findById(id)
        res.render('products/edit', {product})
})

app.put('/product/:id', async(req, res) => {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new:true})
        res.redirect(`/products/${product._id}`, {product})
})

app.listen(3000, () =>{
        console.log('app is listening on port 3000')
})