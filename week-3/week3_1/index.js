const express = require('express');
const z = require('zod');
const app = express();

// const schema = z.array(z.number());

const schema = z.object({
        email: z.string().email(),
        pass : z.string().min(5),
    })

function validate(obj) {
    return schema.safeParse(obj);
}

// let numberOfRequests = 0;
// function rateLimitRequest(req, res,next) {
//     numberOfRequests++;
//     console.log(numberOfRequests);
//     next(); //it is used to call the next function inside of a req: get/post/put/delete
// }
// app.use(rateLimitRequest);
app.use(express.json());

app.post('/login', function(req, res) {

    const response = validate(req.body)
    if (!response.success) {
        res.status(404).json({ message: "Invalid Input" });
    }else {
       res.send({response}); 
    }  

})

/**
app.post('/health-checkup',(req, res) => {
    const kidneys = req.body.kidneys;
    // const kidneyLength = kidneys.length;
    // const response = schema.safeParse(kidneys);

    // if (!response.success) {
    //     res.status(404).json({ message: "Invalid Input" });
    // }else {
    //    res.send({response}); 
    // }  

    function validate(obj) {
        const schema = z.object({
            email: z.string().email(),
            pass : z.string().min(5),
        })

        const response = schema.safeParse(obj)
        if (!response.success) {
            res.status(404).json({ message: "Invalid Input" });
        }else {
           res.send({response}); 
        }  
    }

    validate({
        email: "random@gmail.com",
        pass: "2345678901"
    })
    
    /*
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username !="harkirat" || password !="pass") {
        res.status(400).json({msg: "Invalid username or password."});
        return;
    }
    
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({msg: "Invalid kidney."});
        return;
    }

    //some task
    res.json({
        msg: "kidney is fine!"
    })
    

})
*/


// global err catches
// app.use(function(err, req, res, next) {
//     res.json({msg: "We encountered an error: "+ err.message })
// })
  

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})