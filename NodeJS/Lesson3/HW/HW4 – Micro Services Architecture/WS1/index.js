const express = require('express')
const productsRouter = require('./Controllers/productRouter')

const app = express()
const PORT = 3001;

app.use('/products', productsRouter);

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})