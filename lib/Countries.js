
const utils = required("./Utils.js");
function Countries(client){
    this.client = client
}
Countries.prototype.findAllCountry = function(params,cb){
    let path = utils.uriParams("/countries",params,);
    this.client.get(path,params,cb);
}

Countries.prototype.getCountry = function(params,cb){
    let path = utils.uriParams("/countries/:country_id",params,["country_id"]);
    this.client.get(path,params,cb);
}

Countries.prototype.findByIsoCode = function(params,cb){
    let path = utils.uriParams("/countries/iso/:iso_code",params,["iso_code"]);
    this.client.get(path,params,cb);
}

module.exports = Countries
