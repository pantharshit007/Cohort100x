const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    // add new Admin username and password to db
    try{
        const existingAdmin = await Admin.findOne({ username: username})

        //we can also use dB.create({})
        if (existingAdmin){
            res.status(400).send("Admin already exists!")
        }
        else{
            const admin = new Admin({
                username: username,
                password: password
            })

            await admin.save();
            res.json({
                message: 'Admin created successfully'
            })
        }
    }
    catch (error) {
        console.error('Error during Admin signup:', error);
        res.status(500).send("Internal Server Error");
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    // const username = req.headers.username;
    // const password = req.headers.password;

    const title = req.body.title;
    const desc = req.body.description;
    const price  = req.body.price;
    const link = req.body.imageLink;

    const newCourse = Course.create({
        title:title,
        description: desc,
        price: price,
        imageLink: link
    })

    res.json({
        message: 'Course created successfully', 
        courseId: (await newCourse)._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    
    res.json({
        courses: response
    })
});

module.exports = router;