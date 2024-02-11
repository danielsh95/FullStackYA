const connectDB = require('./Config/db')
const express = require('express')
const cors = require('cors')
const userController = require('./Controllers/userController')

connectDB()
const PORT = 4000;

const app = express()

app.use(cors());
app.use(express.json());

app.use('/users', userController.router)

app.listen(PORT, () => {
    console.log(`The server listening on PORT: ${PORT} at url: http://localhost:${PORT}`);
})