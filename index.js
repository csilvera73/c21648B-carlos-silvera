//importo express desde express
const express = require ("express")
const cors = require ("cors")
const morgan = require("morgan")

//creamos un servidor
const app = express ()

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.listen(4000,()=>{
    console.log("Server running at 4000 port....")
})