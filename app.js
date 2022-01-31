require('./db/connect');
const express = require ('express');
const app = express();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const tasks = require('./routes/tasks');

//Midlleware
app.use(express.static('./public'))
app.use(express.json());


//Routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);



const port = process.env.PORT || 5000;

app.listen(port, console.log(`server listening on port ${port}...`));