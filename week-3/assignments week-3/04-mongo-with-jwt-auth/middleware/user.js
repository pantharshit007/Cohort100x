const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];
    const decodedToken = jwt.verify(jwtToken, JWT_SECRET);

    try{
        if (decodedToken.username) {
            req.username = decodedToken.username;
            next()
        }
        else{
            res.status(403).json({
                message: "User Not Found"
            });
        } 
    }
    catch(err){
        console.log("error occured while Authenticating User: " + err.message);
        res.json({message: "JWT Error"});
    }

}

module.exports = userMiddleware;