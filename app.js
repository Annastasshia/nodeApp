// const Logger = require('./logger');
// const logger = new Logger();


// function sayHello(name) {
//     console.logger('Hello ' + name);
// }

// sayHello('Annastasshia')
// log('blah-blah');


//os node module usage example

const os =require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log('Total Memory: ' + totalMem)
console.log('Total Memory: ' + freeMem)


//file system node module usage example

const fs = require('fs');

    //sync
    const files = fs.readdirSync('./');
    console.log(files);

    //async (prefered)
    fs.readdir('./', function(err, files){
        if(err) console.log('error', err);
        else console.log('Result', files);
    })


//events node module usage example (rare to work with it directly)

const EventEmitter = require('events');
const emitter = new EventEmitter();

    //register a listener for events
    emitter.on('messageLogged', function(arg){
        console.log('Listener Called', arg);
    })

    //raise an event with an argument
    emitter.emit('messageLogged', {id: 1, url:'http://'});


// HTTP node module usage example ( low level server request and responses )

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000 ....')
