const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connect ");
}).catch((e)=>{
    console.log(e);
}) 