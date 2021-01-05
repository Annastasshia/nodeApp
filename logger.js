
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message) {
        console.log(message);
    
        //raise an event with an argument
        this.emit('messageLogged', {id: 1, url:'http://'});
    }

}


module.exports = Logger;
