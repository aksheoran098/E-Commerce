const app = require("./app");

//importing to use configuration variables like process.env.PORT
const dotenv = require("dotenv");  

// call this only after configuring dotenv because it uses process.env.DB_URI
const connectDatabase = require("./config/database")

// log()


//Config
//Doubt : backend se path kyo diya config se kyo nhi?
dotenv.config({path: "backend/config/config.env"})



// Connecting to database
connectDatabase();


app.listen( process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})