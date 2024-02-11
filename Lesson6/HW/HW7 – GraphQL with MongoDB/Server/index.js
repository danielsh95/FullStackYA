const express = require('express')
const cors = require('cors')
const connectDB = require('./Config/db')
const productRouter = require('./Controllers/productsController')

connectDB();//connect to MongoDb

const app = express()
const PORT = 4000

app.use(cors());

app.use('/', productRouter)

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
})

