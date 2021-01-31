
const utils = required("./Utils.js");
function Taxonomy(client){
    this.client = client
}
Taxonomy.prototype.getBuyerTaxonomy = function(params,cb){
    let path = utils.uriParams("/taxonomy/buyer/get",params,);
    this.client.get(path,params,cb);
}

Taxonomy.prototype.getTaxonomyNodeProperties = function(params,cb){
    let path = utils.uriParams("/taxonomy/seller/:taxonomy_id/properties",params,["taxonomy_id"]);
    this.client.get(path,params,cb);
}

Taxonomy.prototype.getSellerTaxonomy = function(params,cb){
    let path = utils.uriParams("/taxonomy/seller/get",params,);
    this.client.get(path,params,cb);
}

Taxonomy.prototype.getSellerTaxonomyVersion = function(params,cb){
    let path = utils.uriParams("/taxonomy/seller/version",params,);
    this.client.get(path,params,cb);
}

Taxonomy.prototype.findSuggestedStyles = function(params,cb){
    let path = utils.uriParams("/taxonomy/styles",params,);
    this.client.get(path,params,cb);
}

module.exports = Taxonomy
