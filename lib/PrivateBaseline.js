
const utils = require("./utils");
function PrivateBaseline(client){
    this.client = client
}
/*
Pings a private v2 uri to get a performance baseline
*/
PrivateBaseline.prototype.getPrivateBaseline = function(params,cb){
    let path = utils.uriParams("/private-baseline",params,);
    this.client.get(path,params,cb);
}

module.exports = PrivateBaseline
