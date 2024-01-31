const {User} = require('../db')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username: username,
        password: password
    })
    .then (function(user){
        if (user){
            next(); //next middleware
        }
        else{
            res.status(403).json({
                message: "User Not Found"
            });
        }
    })
    .catch(function(err){
        // Handle any errors that occurred during database query
        console.error("Error during User authentication:", err);
        res.status(500).json({
            message: "Internal Server Error",
        })
    })

}

module.exports = userMiddleware;