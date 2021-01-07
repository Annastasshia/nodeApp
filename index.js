var _ = require('underscore');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    
})

//searches for a num in a provided array and outputs a boolan
var result= _.contains([1, 2, 3], 4)

console.log(result);