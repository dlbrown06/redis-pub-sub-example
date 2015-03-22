# redis-pub-sub-example
Simple example of using a redis pub/sub server


## Steps to Get Started
1. Create a `config.js` file to house your redis configuration. I'm using a free test redis server from [Redis Labs](http://redislabs.com)
```
module.exports = {
  "host": '{HOST OF REDIS SERVER}',
  "port": {PORT OF REDIS SERVER},
  "password": '{AUTH PASSWORD IF REQUIRED FOR REDIS SERVER}'
};
```
2. Start the publish script to start publishing data every 5 seconds
```
node publish.js
```
3. Start the subscription script from `boot.js` to start 8 sub processes
```
node boot.js
```
