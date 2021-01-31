
const utils = required("./Utils.js");
function PropertyOptions(client){
    this.client = client
}
PropertyOptions.prototype.getPropertyOptionModifier = function(params,cb){
    let path = utils.uriParams("/property_options/modifiers",params,);
    this.client.get(path,params,cb);
}

PropertyOptions.prototype.findAllSuggestedPropertyOptions = function(params,cb){
    let path = utils.uriParams("/property_options/suggested",params,);
    this.client.get(path,params,cb);
}

module.exports = PropertyOptions
