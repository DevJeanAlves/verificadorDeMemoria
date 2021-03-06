const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

emitter = new EventEmitter();

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if(err) throw err;
    })
});

function log(message) {
    emitter.emit('log', message);
}

log('runtime now!')

module.exports = log;

// emitter.emit('log', "Runtime now!");