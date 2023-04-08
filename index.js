const express = require("express");
const cors = require("cors")
const data = require("./Data/data")

const app = express();
app.use(cors({origin:"*"}))
app.get("/", (req, res)=>{
    res.json(data)
})
app.listen(8080,()=>{
    console.log("port started at 8080")
})