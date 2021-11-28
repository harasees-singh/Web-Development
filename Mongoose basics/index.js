const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')

.then(() => {
        console.log("connection open")
})
.catch(err => {
        console.log("oh no error")
        console.log(err)
})

const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
// makes a collection 
// movies

const amadeus = new Movie({
        title: 'Amadeus',
        year: 1898,
        score: 9.9,
        rating: 'A'
})
