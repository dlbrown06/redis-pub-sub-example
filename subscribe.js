/**
 * Injected Dependencies
 */
var redis = require('redis'),
    config = require('./config.js'),
    sub_client = redis.createClient(config.port, config.host);

sub_client.auth(config.password);

sub_client.on("message", function(channel, message) {
    console.log("Message '" + message + "' on channel '" + channel + "' arrived!")
});

sub_client.subscribe("test");
sub_client.subscribe("test1");