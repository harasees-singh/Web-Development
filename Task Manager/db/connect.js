const mongoose = require('mongoose')
// const connectionString = 'mongodb+srv://harasees:seaways@nodeexpressproject.kves2.mongodb.net/task-manager?retryWrites=true&w=majority'

const connectDB = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}
module.exports = connectDB
    