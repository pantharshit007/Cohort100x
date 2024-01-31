const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

/*
// Admin Routes \\
app.post("/admin/signup", function(req, res) {
    
})

app.post("/admin/courses", function(req, res) {
    
})

app.get("/admin/courses", function(req, res) {
    
})


//User's Routes \\
app.post("/user/signup", function(req, res) {})

app.get("/user/courses", function(req, res) {})

app.post("/user/courses", function(req, res) {})

app.post("/users/purchasedCourses", function(req, res) {})

*/
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
