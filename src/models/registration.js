const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const employeeSchema = new mongoose.Schema({
    myname : {
        type:String,
        required:true
    },
    myemail : {
        type:String,
        required:true
    },
    mypassword : {
        type:String,
        required:true
    },
    mycpassword : {
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})
//token generation
employeeSchema.methods.produceAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id}, process.env.UNREVEALED_KEY );
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;  
    } catch (error) {
        res.send(`the error is : ${error}`);
    }
}

employeeSchema.pre("save", async function(next){
    if(this.isModified("mypassword")){
         this.mypassword = await bcrypt.hash(this.mypassword, 10);

        this.mycpassword = await bcrypt.hash(this.mycpassword, 10);
    }
    next();
})

//  creating a collection

const Rohit = new mongoose.model("Rohit", employeeSchema);
module.exports = Rohit;