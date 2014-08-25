var lirc_client  = require('lirc_client'),
    _            = require('lodash'),
    amqp         = require('./chains-amqp').connect({deviceName: 'lirc'});

var sendEvent = function(eventName, data) {
    amqp.sendEvent(eventName, data);
};

var sendEventThrottled = _.throttle(sendEvent, 1000, {trailing: false});

try {
    lirc_client.connect('chains', false, 'lirc.conf', function(type, data, configFile) {
        var irCommand = data.split(' '),
            button = irCommand[2],
            remote = irCommand[3];

        sendEventThrottled('remote-' + remote, {value: button});
    });
} catch (err) {
    console.log('LIRC: Error connecting to LIRC client:', err);
}