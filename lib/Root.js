
const utils = require("./utils");
function Root(client){
    this.client = client
}
/*
Get a list of all methods available.
*/
Root.prototype.getMethodTable = function(params,cb){
    let path = utils.uriParams("/",params,);
    this.client.get(path,params,cb);
}

module.exports = Root
