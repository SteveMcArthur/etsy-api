
const utils = require("./utils.js");
function Server(client){
    this.client = client
}
/*
Get server time, in epoch seconds notation.
*/
Server.prototype.getServerEpoch = function(params,cb){
    let path = utils.uriParams("/server/epoch",params,);
    this.client.get(path,params,cb);
}

/*
Check that the server is alive.
*/
Server.prototype.ping = function(params,cb){
    let path = utils.uriParams("/server/ping",params,);
    this.client.get(path,params,cb);
}

module.exports = Server
