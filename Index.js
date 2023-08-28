const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();


//Start Server
const PORT = process.env.PORT ||  5000;
app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

//Follow MVC Pattern 
