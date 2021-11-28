// routing takes incoming request and matches it to some response
const express = require("express")
const app = express()

app.get('/', (req, res) => {
        res.send('<h3>welcome to the zoo hurray</h3>')
})

app.get('/r/:subreddit/:p', (req, res) => {
        const {subreddit, p} = req.params
        res.send(`this is a ${subreddit} subreddit featuring ${p}`)
})

app.get('/cats', (req, res) => {
        res.send('MEOW!')
})

app.get('/dogs', (req, res) => {
        res.send('WOOF!')
})
// working with query strings
app.get('/search', (req, res) => {
        const {q} = req.query
        res.send(`<h1>Search results for : ${q} </h1>`)
})
app.get('*', (req, res) => {
        res.send(`i don't know this path`)
})

app.listen(8080, () => {
        console.log("listening to requests")
})