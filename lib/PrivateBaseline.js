
const utils = required("./Utils.js");
function PrivateBaseline(client){
    this.client = client
}
PrivateBaseline.prototype.getPrivateBaseline = function(params,cb){
    let path = utils.uriParams("/private-baseline",params,);
    this.client.get(path,params,cb);
}

module.exports = PrivateBaseline
