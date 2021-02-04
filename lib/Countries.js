
const utils = require("./utils");
function Countries(client){
    this.client = client
}
/*
Finds all Country.
*/
Countries.prototype.findAllCountry = function(params,cb){
    let path = utils.uriParams("/countries",params,);
    this.client.get(path,params,cb);
}

/*
Retrieves a Country by id.
*/
Countries.prototype.getCountry = function(params,cb){
    let path = utils.uriParams("/countries/:country_id",params,["country_id"]);
    this.client.get(path,params,cb);
}

/*
Get the country info for the given ISO code.
*/
Countries.prototype.findByIsoCode = function(params,cb){
    let path = utils.uriParams("/countries/iso/:iso_code",params,["iso_code"]);
    this.client.get(path,params,cb);
}

module.exports = Countries
