const jwt = require("jsonwebtoken");
const Register = require("../models/registration");

const auth = async (req, res, next) =>{
    try {
        const cToken = req.cookies.user;
        const verifyuser = jwt.verify(cToken, process.env.UNREVEALED_KEY);
        console.log (verifyuser);

        const client = await Register.findOne({_id : verifyuser._id});
        console.log (client);

        req.cToken = cToken;
        req.client = client;
        next();

    } catch (error) {
        res.status(200).render("login");
    }
}

module.exports = auth; 