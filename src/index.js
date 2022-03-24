require('dotenv').config(); 
const express = require("express");
const path = require("path")
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const cookieparser = require("cookie-parser");
const auth = require("./middleware/auth")

require("./db/connection");
const Rohit = require("./models/registration");
const { json } = require("express");

const port = process.env.PORT || 8000

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path); 

app.get("/", (req , res) => {
    res.render("index");
});

app.get("/signup", (req , res)=>{
    res.render("signup");
});

app.get("/login", (req , res)=>{
    res.render("login")
});

app.get("/list", auth , (req , res)=>{
    console.log(`cookie value ${req.cookies.user}`)
    res.render("list"); 
});

app.get("/logout", auth , async(req , res) =>{
    try {
        req.client.tokens = req.client.tokens.filter((currelement) =>{
            return currelement.tokens != req.cToken ;
        })

        res.clearCookie("user");
        console.log("successful logout");

        await req.client.save();
        res.render("login");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post("/signup", async (req, res)=>{
    try{
           const mypassword = req.body.mypassword;
           const mycpassword = req.body.mycpassword; 
            if(mypassword === mycpassword){
                const registeruserdata = new Rohit({
                myname : req.body.myname,
                myemail : req.body.myemail,
                mypassword : mypassword,
                mycpassword : mycpassword
            })

            const token = await registeruserdata.produceAuthToken();

            res.cookie("user", token, {
                expires:new Date(Date.now() + 100000),
                httpOnly:true
            });

            const registered = await registeruserdata.save();
            res.status(201).render("index"); 
          }  else{
              res.send("password not matched ");
          }
         }
    catch(error){
        console.log(error)
        res.status(400).send(error);
    }
});

// login validation
app.post("/login", async(req, res)=>{
    try {
        const myemail = req.body.myemail;
        const mypassword = req.body.mypassword;

        const useremail = await Rohit.findOne({myemail});

        const token = await useremail.produceAuthToken();

        res.cookie("user", token, {
            expires:new Date(Date.now() + 100000),
            httpOnly:true,
            // secure:true
        });

        const isMatch = await bcrypt.compare(mypassword, useremail.mypassword);

        if(isMatch){
            res.status(201).render("index");
        } else{
            res.send("data is not correct");
        }


    } catch (error) {
        res.status(400).send("invalid E-mail")
    }
})
app.listen(port, () => {
    console.log(`server is running at ${port}`)
})