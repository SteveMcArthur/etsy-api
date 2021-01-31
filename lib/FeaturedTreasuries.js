
const utils = require("./Utils.js");
function FeaturedTreasuries(client){
    this.client = client
}
/*
Finds all FeaturedTreasuries.
*/
FeaturedTreasuries.prototype.findAllFeaturedTreasuries = function(params,cb){
    let path = utils.uriParams("/featured_treasuries",params,);
    this.client.get(path,params,cb);
}

/*
Finds FeaturedTreasury by numeric ID.
*/
FeaturedTreasuries.prototype.getFeaturedTreasuryById = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/:featured_treasury_id",params,["featured_treasury_id"]);
    this.client.get(path,params,cb);
}

/*
Finds all listings for a certain FeaturedTreasury.
*/
FeaturedTreasuries.prototype.findAllListingsForFeaturedTreasuryId = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/:featured_treasury_id/listings",params,["featured_treasury_id"]);
    this.client.get(path,params,cb);
}

/*
Finds all active listings for a certain FeaturedTreasury.
*/
FeaturedTreasuries.prototype.findAllActiveListingsForFeaturedTreasuryId = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/:featured_treasury_id/listings/active",params,["featured_treasury_id"]);
    this.client.get(path,params,cb);
}

/*
Finds all FeaturedTreasury listings.
*/
FeaturedTreasuries.prototype.findAllFeaturedListings = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/listings",params,);
    this.client.get(path,params,cb);
}

/*
Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
*/
FeaturedTreasuries.prototype.findAllCurrentFeaturedListings = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/listings/homepage_current",params,);
    this.client.get(path,params,cb);
}

/*
Finds all FeaturedTreasury by numeric owner_id.
*/
FeaturedTreasuries.prototype.findAllFeaturedTreasuriesByOwner = function(params,cb){
    let path = utils.uriParams("/featured_treasuries/owner/:owner_id",params,["owner_id"]);
    this.client.get(path,params,cb);
}

module.exports = FeaturedTreasuries
