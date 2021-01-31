
const utils = required("./Utils.js");
function FeaturedTreasuries(client){
    this.client = client
}
FeaturedTreasuries.prototype.findAllFeaturedTreasuries = function(params,cb){
    let path = utils.uriParams("/featured_treasuries",params,);
    this.client.get(path,params,cb);
}

FeaturedTreasuries.prototype.getFeaturedTreasuryById = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/:featured_treasury_id",params,["featured_treasury_id"]);
    this.client.get(path,params,cb);
}

FeaturedTreasuries.prototype.findAllListingsForFeaturedTreasuryId = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/:featured_treasury_id/listings",params,["featured_treasury_id"]);
    this.client.get(path,params,cb);
}

FeaturedTreasuries.prototype.findAllActiveListingsForFeaturedTreasuryId = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/:featured_treasury_id/listings/active",params,["featured_treasury_id"]);
    this.client.get(path,params,cb);
}

FeaturedTreasuries.prototype.findAllFeaturedListings = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/listings",params,);
    this.client.get(path,params,cb);
}

FeaturedTreasuries.prototype.findAllCurrentFeaturedListings = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/listings/homepage_current",params,);
    this.client.get(path,params,cb);
}

FeaturedTreasuries.prototype.findAllFeaturedTreasuriesByOwner = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/owner/:owner_id",params,["owner_id"]);
    this.client.get(path,params,cb);
}

module.exports = FeaturedTreasuries
