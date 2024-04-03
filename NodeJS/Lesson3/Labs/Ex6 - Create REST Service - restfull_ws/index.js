const express = require('express')
const carController = require('./controllers/carsController')

const app = express();
const PORT = 3000;

app.use(express.json()); 

app.use('/cars', carController);

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
});