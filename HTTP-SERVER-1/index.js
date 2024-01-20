const express = require ('express');
const bodyParser = require('body-parser');  
const port = 3000
const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world');
})

app.post('/post', (req, res) => {
    console.log(req.body)
    res.send({
        msg: "1+1= 2"
    })
})

app.listen(port,()=> {
    console.log('listening on port ' + port);
});