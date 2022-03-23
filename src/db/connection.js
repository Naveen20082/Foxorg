const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lucky:Lucky8063@cluster0.kkipx.mongodb.net/movieweb?retryWrites=true&w=majority").then(()=>{
    console.log("connect ");
}).catch((e)=>{
    console.log(e);
}) 