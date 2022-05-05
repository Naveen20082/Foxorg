// require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
// const bcrypt = require("bcryptjs");
// const cookieparser = require("cookie-parser");
// const auth = require("./middleware/auth")

// require("./db/connection");
// const Rohit = require("./models/registration");
// const { json } = require("express");

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// app.use(express.json());
// app.use(cookieparser());
// app.use(express.urlencoded({extended:false}));

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

app.get("/sign_in", (req, res) => {
  res.render("sign_in");
});
app.get("/sign_up", (req, res) => {
  res.render("sign_up");
});

// app.get("/list", auth , (req , res)=>{
//     console.log(`cookie value ${req.cookies.user}`)
//     res.render("list");
// });

// app.get("/logout", auth , async(req , res) =>{
//     try {
//         req.client.tokens = req.client.tokens.filter((currelement) =>{
//             return currelement.tokens != req.cToken ;
//         })

//         res.clearCookie("user");
//         console.log("successful logout");

//         await req.client.save();
//         res.render("login");
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

// app.post("/signup", async (req, res)=>{
//     const { myname, myemail, mypassword, mycpassword} = req.body;

//     // if (!myname || !myemail || !mypassword || !mycpassword){
//     //     return res.status(422).render("signup",{error: "please fill all field"});
//     // }
//     try{
//         const existUser = await Rohit.findOne({myemail : myemail});
//         if(existUser){
//             return res.status(422).render("signup", {error : "email already exist"});
//         }else if(mypassword != mycpassword){
//             return res.status(422).render("signup",{error: "password are not matched"});
//         }else{
//                const registeruserdata = new Rohit({ myname, myemail, mypassword, mycpassword});

//                 const token = await registeruserdata.produceAuthToken();

//             res.cookie("user", token, {
//                 expires:new Date(Date.now() + 100000),
//                 httpOnly:true
//             });

//             const registered = await registeruserdata.save();
//             res.status(201).render( "index" , {display : registered} );
//           }
//          }
//     catch(error){
//         console.log(error)
//         res.status(400).send(error);
//     }
// });

// // login validation
// app.post("/login", async(req, res)=>{
//     try {
//         const myemail = req.body.myemail;
//         const mypassword = req.body.mypassword;

//         const useremail = await Rohit.findOne({myemail});

//         const token = await useremail.produceAuthToken();

//         res.cookie("user", token, {
//             expires:new Date(Date.now() + 100000),
//             httpOnly:true,
//             // secure:true
//         });

//         const isMatch = await bcrypt.compare(mypassword, useremail.mypassword);

//         if(isMatch){
//             res.status(201).render("index");
//         } else{
//             res.send("data is not correct");
//         }

//     } catch (error) {
//         res.status(400).send("invalid E-mail")
//     }
// })
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
