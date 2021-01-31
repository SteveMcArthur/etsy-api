
const utils = required("./Utils.js");
function Server(client){
    this.client = client
}
Server.prototype.getServerEpoch = function(params,cb){
    let path = utils.uriParams("/server/epoch",params,);
    this.client.get(path,params,cb);
}

Server.prototype.ping = function(params,cb){
    let path = utils.uriParams("/server/ping",params,);
    this.client.get(path,params,cb);
}

module.exports = Server
