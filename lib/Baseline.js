
const utils = require("./utils.js");
function Baseline(client){
    this.client = client
}
/*
Pings a public v2 uri to get a performance baseline
*/
Baseline.prototype.getPublicBaseline = function(params,cb){
    let path = utils.uriParams("/baseline",params,);
    this.client.get(path,params,cb);
}

module.exports = Baseline
