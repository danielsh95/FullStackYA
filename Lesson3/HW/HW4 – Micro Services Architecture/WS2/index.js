const express = require('express');
const productRouter = require('./Controllers/productRouter');

const app = express();
const PORT = 8000;

app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server's product is listening on port ${PORT}`);
})

