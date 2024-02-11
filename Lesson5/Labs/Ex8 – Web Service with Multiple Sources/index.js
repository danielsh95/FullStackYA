const express = require('express')
const personRouter = require('./Controllers/personUserRouter')
const connectDB = require('./configs/db')

const { log } = require('console')
const app = express()
const PORT = 3000;

connectDB();//connect to MongoDb

app.use('/persons', personRouter)

app.listen(PORT, ()=>{
    console.log(`The server on port ${PORT} listening at http://localhost:${PORT}/persons`);
})