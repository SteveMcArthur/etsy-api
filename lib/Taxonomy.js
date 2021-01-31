
const utils = require("./Utils.js");
function Taxonomy(client){
    this.client = client
}
/*
Retrieve the entire taxonomy as seen by buyers in search.
*/
Taxonomy.prototype.getBuyerTaxonomy = function(params,cb){
    let path = utils.uriParams("/taxonomy/buyer/get",params,);
    this.client.get(path,params,cb);
}

/*
Get the possible properties of a taxonomy node
*/
Taxonomy.prototype.getTaxonomyNodeProperties = function(params,cb){
    let path = utils.uriParams("/taxonomy/seller/:taxonomy_id/properties",params,["taxonomy_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieve the entire taxonomy as used by sellers in the listing process.
*/
Taxonomy.prototype.getSellerTaxonomy = function(params,cb){
    let path = utils.uriParams("/taxonomy/seller/get",params,);
    this.client.get(path,params,cb);
}

/*
Get the current version of the seller taxonomy
*/
Taxonomy.prototype.getSellerTaxonomyVersion = function(params,cb){
    let path = utils.uriParams("/taxonomy/seller/version",params,);
    this.client.get(path,params,cb);
}

/*
Retrieve all suggested styles.
*/
Taxonomy.prototype.findSuggestedStyles = function(params,cb){
    let path = utils.uriParams("/taxonomy/styles",params,);
    this.client.get(path,params,cb);
}

module.exports = Taxonomy
