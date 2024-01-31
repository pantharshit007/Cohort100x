const {Admin} = require('../db');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username:username, 
        password:password
    })
    .then (function(admin){
        if (admin){
            next(); //next middleware
        }
        else{
            res.status(403).json({
                message: "Admin Not Found"
            });
        }
    })
    .catch(function(err){
        // Handle any errors that occurred during database query
        console.error("Error during admin authentication:", err);
        res.status(500).json({
            message: "Internal Server Error",
        })
    })
}

module.exports = adminMiddleware;