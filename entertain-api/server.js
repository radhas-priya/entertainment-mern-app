const express = require("express");
const cors =require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose=require("mongoose");
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DB connected")
})
;
app.use("/api/user",userRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log("Server started"));