require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const cookieparser = require("cookie-parser");
const auth = require("./middleware/auth")

require("./db/connection");
const Rohit = require("./models/registration");
const { json } = require("express");

const port = process.env.PORT || 8000;

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

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dmag", (req, res) => {
  res.render("Dmag");
});

app.get("/team", (req, res) => {
  res.render("Final team");
});

app.get("/ai", (req, res) => {
  res.render("aiWebsite");
});

app.get("/blockchain", (req, res) => {
  res.render("blockchain");
});

app.get("/cloud", (req, res) => {
  res.render("cloud");
});

app.get("/cyber", (req, res) => {
  res.render("cyber");
});

app.get("/research", (req, res) => {
  res.render("research");
});

app.get("/software", (req, res) => {
  res.render("software");
});

app.get("/login", (req, res) => {
  res.render("sign_in");
});

app.get("/registration", (req, res) => {
  res.render("sign_up");
});

// app.get("/list", auth , (req , res)=>{
//     console.log(`cookie value ${req.cookies.user}`)
//     res.render("list");
// });

app.get("/logout", auth , async(req , res) =>{
    try {
        req.client.tokens = req.client.tokens.filter((currelement) =>{
            return currelement.tokens != req.cToken ;
        });

        res.clearCookie("user");
        console.log("successful logout");

        await req.client.save();
        res.render("Sign_in");
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/registration", async (req, res)=>{
    const { Name, Email, Password, Confirm_Password} = req.body;

    if (!Name || !Email || !Password || !Confirm_Password){
        return res.status(422).render("sign_up",{error: "please fill all field"});
    }
    try{
        const existUser = await Rohit.findOne({Email : Email});
        if(existUser){
            return res.status(422).render("sign_up", {error : "email already exist"});
        }else if(Password != Confirm_Password){
          console.log("hello")
            return res.status(422).render("sign_up",{error: "password are not matched"});
        }else{
              
               const registeruserdata = new Rohit({ Name, Email, Password, Confirm_Password});
                console.log(registeruserdata);
                const token = await registeruserdata.produceAuthToken();

            res.cookie("user", token, {
                expires:new Date(Date.now() + 30000000),
                httpOnly:true
            });

            const registered = await registeruserdata.save();
            console.log(registered);
            res.status(201).render( "index" , {display : registered} );
          }
         }
    catch(error){
        console.log(error)
        res.status(400).send(error);
    }
});

// // login validation
app.post("/login", async(req, res)=>{
    try {
        const Email = req.body.Email;
        const Password = req.body.Password;

        const useremail = await Rohit.findOne({Email});

        const token = await useremail.produceAuthToken();

        res.cookie("user", token, {
            expires:new Date(Date.now() + 100000),
            httpOnly:true,
            // secure:true 
        });

        const isMatch = await bcrypt.compare(Password, useremail.Password);

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
  console.log(`server is running at ${port}`);
});
