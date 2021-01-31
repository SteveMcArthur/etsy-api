
const utils = required("./Utils.js");
function Baseline(client){
    this.client = client
}
Baseline.prototype.getPublicBaseline = function(params,cb){
    let path = utils.uriParams("/baseline",params,);
    this.client.get(path,params,cb);
}

module.exports = Baseline
