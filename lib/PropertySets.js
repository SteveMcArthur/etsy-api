
const utils = required("./Utils.js");
function PropertySets(client){
    this.client = client
}
PropertySets.prototype.findPropertySet = function(params,cb){
    let path = utils.uriParams("/property_sets",params,);
    this.client.get(path,params,cb);
}

module.exports = PropertySets
