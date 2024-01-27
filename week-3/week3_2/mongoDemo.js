const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtPassword = "123456";

require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.mongoLink);

const User = mongoose.model('users', { 
    name: String, 
    email: String, 
    password: String 
});

// Handling MongoDB connection events
mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

//Sign Up
app.post('/signup', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    try {
        const existingUser = await User.findOne({ email: username });

        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name: name,
            email: username,
            password: hashedPassword
        });

        await user.save();

        res.send("User has been created");
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send("Internal Server Error");
    }
});

async function userExists(username, password) {
    const user = await User.findOne({ email: username });

    if (!user) {
        return false;
    }

    // Compare hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    return isPasswordMatch;
}

//Sign In
app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!(await userExists(username, password))) {
        return res.status(403).json({
            msg: "Invalid username or password",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

//Accesing Users Data
app.get("/users", async function (req, res) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        // Find users excluding the current user $ne is checking whether username != to username present in dB
        const newUsers = await User.find({ email: { $ne: username } });

        res.json({
            newUsers: newUsers.map((user) => ({
                username: user.email,
                password: user.password
            })),
        });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);
