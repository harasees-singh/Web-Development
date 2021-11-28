const express = require("express")
const app = express()

app.use((req, res) => {
        console.log("WE GOT A NEW REQUEST!!!!!!")
        // res.send("Hello this is a response")
        // res.send({color : "red"})
        res.send('<h2>This is my webpage!</h1>')
})
const colors = require('colors')
const joke = require('give-me-a-joke')
joke.getRandomCNJoke(function (joke){
        console.log(joke.rainbow)
})
app.listen(8080, () => {
        console.log("listening to requests")
})