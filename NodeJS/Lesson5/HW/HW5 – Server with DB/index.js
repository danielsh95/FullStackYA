const express = require('express')
const configDb = require('./Config/db')
const studentsRouter = require('./Controllers/studentsController')
const gradesRouter = require('./Controllers/gradesController')


const app = express();
const PORT = 3000

configDb();

app.use('/students', studentsRouter)

app.use('/grades', gradesRouter)

app.get('*', function(req, res){
    res.send('what???', 404);
  });

app.listen(PORT, ()=>{
    console.log(`The server on PORT ${PORT} listening at http://localhost:${PORT}`);
})