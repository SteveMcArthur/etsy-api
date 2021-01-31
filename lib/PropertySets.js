
const utils = require("./utils.js");
function PropertySets(client){
    this.client = client
}
/*
Find the property set for the category id
*/
PropertySets.prototype.findPropertySet = function(params,cb){
    let path = utils.uriParams("/property_sets",params,);
    this.client.get(path,params,cb);
}

module.exports = PropertySets
