const ConnectDb = require('./Config/db')
const express = require('express')
const cors = require('cors');

const usersRouter = require('./Controllers/usersController')
const productsRouter = require('./Controllers/productsController')

const app = express()
const PORT = 3000

app.use(cors());
app.use(express.json());

ConnectDb();

app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(PORT, () => {
    console.log(`The server listening on PORT: ${PORT} at url: http://localhost:${PORT}`);
})