const express = require('express');
const app = express();

const fs = require('fs');
fs.readFile("a.txt", "utf-8", function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log(data);
    }
});

app.get('/file/:fileName', function(req,res){
    const name = req.params.fileName;
    fs.readFile(name, "utf-8",function(err,data){
        console.log(data);
        res.json({
            data
        })
    })
})

var users= [{
    name: 'John', 
    kidney:[ { healthy: false }, 
             { healthy: true }, ]
}];

//in order to use req.body : const isHealthy = req.body.isHealthy
app.use(express.json())

app.get("/", function(req, res){
    const johnKidney = users[0].kidney;
    const numKidney = johnKidney.length;

    let healthyKidney = 0
    for (let i = 0; i < numKidney; i++) {
        if (johnKidney[i].healthy) healthyKidney += 1;
    }

    const unHealthyKidney = numKidney - healthyKidney;

    res.json({
        johnKidney,
        numKidney,
        healthyKidney,
        unHealthyKidney
    });
})

app.post('/',function(req, res){
    const isHealthy = req.body.isHealthy

    users[0].kidney.push({
        healthy: isHealthy
    })

    res.json({
        msg: 'Done!'
    })
})

app.put('/',function(req, res){
    for(let i=0; i<users[0].kidney.length ; i++){
        users[0].kidney[i].healthy = true;
    }

    // sending a json is a must in Put request it can be an json also
    res.json({
        msg: "put done!"
    })
})

app.delete('/',function(req, res){

    if (atleastOneUnhealthy()){
        const newKidney = []
        for(let i=0; i<users[0].kidney.length ; i++){
            if (users[0].kidney[i].healthy){
                newKidney.push({
                    healthy: true
                })
            }
        }
        users[0].kidney = newKidney;
        // sending a json is a must in Put request it can be an json also
        res.json({
            msg: "delete done!"
        })
    }else{
        res.status(411).json({
            msg: "bro you dont have any unHealthyKidney!"
        })
    }
    
})

function atleastOneUnhealthy(){
    const oneUnhealthy = false;

    for(let i=0; i<users[0].kidney.length ; i++){
        if (!users[0].kidney[i].healthy){
            oneUnhealthy = true;
        }
    }
    return oneUnhealthy;
}


app.listen(3000, ()=>{
    console.log('listening on 3000');
})
