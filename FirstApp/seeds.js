const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')

        .then(() => {
                console.log("mongo connection open")
        })
        .catch(err => {
                console.log("oh no error")
                console.log(err)
        })
// const p = new Product({
//         name: 'Ruby Grapefruit',
//         price: 1.99,
//         category: 'fruit'
// })
// p.save()
//         .then(p =>{
//                 console.log(p)
//         })
//         .catch(e =>{
//                 console.log(e)
//         })
const seedProducts = [
        {
                name: 'Ruby Grapefruit',
                price: 1.99,
                category: 'fruit'   
        },
        {
                name: 'organic goddess melon',
                price: 4.99,
                category: 'fruit'
        },
        {
                name: 'organic seedless melon',
                price: 8.99,
                category: 'fruit'
        }
]

Product.insertMany(seedProducts)
        .then(res => {
                console.log(res)
        })
        .catch(e => {
                console.log(e)
        })