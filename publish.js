/**
 * Injected Dependencies
 */
var redis = require('redis'),
    config = require('./config.js'),
    pub_client = redis.createClient(config.port, config.host);

pub_client.auth(config.password);

pub_client.on("connect", function () {
    console.log("Redis Pub Client Connect");
    publish();

});

pub_client.on("error", function (err) {
    console.log("Redis Pub Client Error " + err);
});

function publish () {
    setTimeout(function () {
        console.log('Publishing New Data');
        pub_client.set('test_key', JSON.stringify({ test: 'working' }));
        pub_client.publish('test', 'Sent new data: ' + +new Date());
        pub_client.publish('test1', 'Sent new data: ' + +new Date());
        publish();
    }, 5000);
}