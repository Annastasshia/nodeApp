var _ = require('underscore');
const express = require('express');
const app = express();

//endpoints
app.get('/', (req, res) => {
    res.send('Hello World!!');
})

app.get('/api/courses', (req, res) => {
    res.send([class1,class2,class3]);
})

app.get('/api/courses/:id',(req,res)=> {
    res.send(req.params.id)
})

app.get('/api/posts/:year/:month',(req,res) => {
    res.send(req.params)
})

//Litening port | Enviroment variable

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ' + port + '....'))

//searches for a num in a provided array and outputs a boolan
var result= _.contains([1, 2, 3], 4)

console.log(result);