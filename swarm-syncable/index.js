'use strict';
var stamp = require("swarm-stamp");

var Swarm = {
    Spec: require('./src/Spec'),
    Op: require('./src/Op'),
    Host: require('./src/Host'),
    Syncable: require('./src/Syncable'),
    OpSource: require('./src/OpSource'),
    StreamOpSource: require('./src/StreamOpSource'),
    OpQueue: require('./src/OpQueue'),
    Model: require('./src/Model'),
    Set: require('./src/Set'),
    get: get_fn
};

function get_fn (id, callback) {
    return Swarm.Host.localhost.get(id, callback);
}

Object.keys(stamp).forEach(function(key){
    Swarm[key] = Swarm[key] || stamp[key];
});

module.exports = Swarm;
