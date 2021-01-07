var _ = require('underscore');
const express = require('express');
const app = express();

//endpoints
app.get('/', (req, res) => {
    res.send('Hello World!!');
})

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
})

//Litening port | Enviroment variable

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ' + port + '....'))

//searches for a num in a provided array and outputs a boolan
var result= _.contains([1, 2, 3], 4)

console.log(result);