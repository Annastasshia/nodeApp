//dependencies
const _ = require('underscore');
const express = require('express');
const app = express();
const Joi = require('joi');

//middleware
app.use(express.json());

//data array
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

//GET endpoints
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with that given ID was not found')
    res.send(course);
});

app.get('/api/posts/:year/:month',(req,res) => {
    res.send(req.params)
});

//POST requests | test with postman
app.post('/api/courses', (req,res) => {

    //validation logic without joi : set Min characters 
    if(!req.body.name || req.body.name.length < 3) 
        //400 Bad Request
       return res.status(400).send('Name needs at least 3 characters');
     

    // //validation logic with Joi : set Max characters
        // const schema = {
        //     name: Joi.string().max(7).required
        // };

        // const result = Joi.validate(req.body, schema);

        // if (result.error) {
        //     res.status(400).send(result.error.details[0].message);
        //     return;
        // }
        // console.log (result);

    const course ={
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

//PUT requests
app.put('/api/courses/:id', (req, res) => {
    //look up course
    //if it doesnt exist return 404 error
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with that given ID was not found')

    //Validate
    //if invalid return 400 error
    const schema = {
        name: Joi.string().min(3).required
    };
    const {error} = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);

    //update course 
    //return updated course
    course.name = req.body.name;
    res.send(course);

})

//DELETE requests 
app.delete('/api/courses/:id', (req,res) =>{
    //look up course 
    //return 404 error if not found 
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with that given ID was not found')


    //Detete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the same course
    res.send(course);
})


//Litening port | Enviroment variable

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ' + port + '....'))

//searches for a num in a provided array and outputs a boolan
var result= _.contains([1, 2, 3], 4)

console.log(result);