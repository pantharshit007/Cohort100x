const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    //create can lead to multiple similar signups
    User.create({
        username,
        password
    })

    res.json({
        message: 'User created successfully'
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })
});

//need to re-implement for better understanding between query and parameters
// query are send like this ?courseId= ... while parameters are /...
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        // Implement course purchase logic
        const courseId = req.params.courseId;
        const username = req.headers.username;

        //checking if the user already bought the course or not
        const user = await User.findOne({
            username: username,
            purchasedCourses: courseId
        })

        if (user){
            // User has already purchased the course
            return res.status(400).json({
                message: 'User has already purchased this course'
            });
        }

        await User.updateOne({
            username: username
        }, {
            $push: {
                purchasedCourses: courseId,
            }
        });

        res.status(200).json({
            message: 'Course purchased successfully'
        });
    } catch (error) {
        console.error('Error purchasing course:', error);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const response = await User.findOne({ 
        username: username, 
    })

    //$in operator is used to query for documents where the value of a field equals any value in the specified array
    // as i forgot to use await here it was causing issues use Await
    const courses = await Course.find({
        _id:{
            $in : response.purchasedCourses
        }
     })
    res.json({
        coursesPurchased: courses
    })

});

module.exports = router