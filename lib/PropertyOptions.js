
const utils = require("./utils.js");
function PropertyOptions(client){
    this.client = client
}
/*
Add a value for a given property.
*/
PropertyOptions.prototype.getPropertyOptionModifier = function(params,cb){
    let path = utils.uriParams("/property_options/modifiers",params,);
    this.client.get(path,params,cb);
}

/*
Finds all suggested property options for a given property.
*/
PropertyOptions.prototype.findAllSuggestedPropertyOptions = function(params,cb){
    let path = utils.uriParams("/property_options/suggested",params,);
    this.client.get(path,params,cb);
}

module.exports = PropertyOptions
