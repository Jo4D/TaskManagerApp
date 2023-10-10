const connectToDb = require('./db/connect');
require('dotenv').config();
console.log('Task Manager App')
const notFound = require('./middlewares/not-found')
const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const start = async ()=>{
    try {
        await connectToDb(process.env.MONGO_URI);
        console.log('connected to db');
        app.listen(port,console.log(`server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
//middleware
app.use(express.static('./public'))
app.use(express.json());
//routes
app.get('/',(req,res)=>{
    res.send('Task Manager App');
});
app.use('/api/v1/tasks',tasks);
app.use(notFound);
start();