
const utils = required("./Utils.js");
function Regions(client){
    this.client = client
}
Regions.prototype.findAllRegion = function(params,cb){
    let path = utils.uriParams("/regions",params,);
    this.client.get(path,params,cb);
}

Regions.prototype.getRegion = function(params,cb){
    let path = utils.uriParams("/regions/:region_id",params,["region_id"]);
    this.client.get(path,params,cb);
}

Regions.prototype.findEligibleRegions = function(params,cb){
    let path = utils.uriParams("/regions/eligible",params,);
    this.client.get(path,params,cb);
}

module.exports = Regions
