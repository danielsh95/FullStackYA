const connectDB = require('./Config/db')
const express = require('express')
const cors = require('cors')
const userController = require('./Controllers/userController')
const emploeesController = require('./Controllers/emploeesController')
const shiftsController = require('./Controllers/shiftsController')
const departmentsController = require('./Controllers/departmentsController')

connectDB()
const PORT = 4000;

const app = express()

app.use(cors());
app.use(express.json());

app.use('/users', userController)
app.use('/employees', emploeesController)
app.use('/shifts', shiftsController)
app.use('/departments', departmentsController)

app.listen(PORT, () => {
    console.log(`The server listening on PORT: ${PORT} at url: http://localhost:${PORT}`);
})