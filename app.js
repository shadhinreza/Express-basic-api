const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routers/users.routers');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//Users middleware
app.use('/users', userRouter);



//Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//404 Error Page
app.get('*', (req, res) => {
    res.status(404).json({message: "404 Error Page"});
})

//Server error handler
app.use((req, res, next) => {
    res.status(500).json({message: "Something went wrong!"});
})



module.exports = app;
