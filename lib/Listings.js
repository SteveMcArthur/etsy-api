
const utils = required("./Utils.js");
function Listings(client){
    this.client = client
}
Listings.prototype.createListing = function(params,cb){
    let path = utils.uriParams("/listings",params,);
    this.client.post(path,params,cb);
}

Listings.prototype.getListing = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.updateListing = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id",params,["listing_id"]);
    this.client.put(path,params,cb);
}

Listings.prototype.deleteListing = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id",params,["listing_id"]);
    this.client.delete(path,params,cb);
}

Listings.prototype.getAttributes = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/attributes",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.getAttribute = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/attributes/:property_id",params,["listing_id","property_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.updateAttribute = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/attributes/:property_id",params,["listing_id","property_id"]);
    this.client.put(path,params,cb);
}

Listings.prototype.deleteAttribute = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/attributes/:property_id",params,["listing_id","property_id"]);
    this.client.delete(path,params,cb);
}

Listings.prototype.findAllListingFavoredBy = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/favored-by",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.findAllListingFiles = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/files",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.uploadListingFile = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/files",params,["listing_id"]);
    this.client.post(path,params,cb);
}

Listings.prototype.findListingFile = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/files/:listing_file_id",params,["listing_id","listing_file_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.deleteListingFile = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/files/:listing_file_id",params,["listing_id","listing_file_id"]);
    this.client.delete(path,params,cb);
}

Listings.prototype.findAllListingImages = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/images",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.uploadListingImage = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/images",params,["listing_id"]);
    this.client.post(path,params,cb);
}

Listings.prototype.getImage_Listing = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/images/:listing_image_id",params,["listing_id","listing_image_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.deleteListingImage = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/images/:listing_image_id",params,["listing_id","listing_image_id"]);
    this.client.delete(path,params,cb);
}

Listings.prototype.getInventory = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/inventory",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.updateInventory = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/inventory",params,["listing_id"]);
    this.client.put(path,params,cb);
}

Listings.prototype.getProduct = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/products/:product_id",params,["listing_id","product_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.getOffering = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/products/:product_id/offerings/:offering_id",params,["listing_id","product_id","offering_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.findAllListingShippingProfileEntries = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/info",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.createShippingInfo = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/info",params,["listing_id"]);
    this.client.post(path,params,cb);
}

Listings.prototype.getListingShippingUpgrades = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/upgrades",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.createListingShippingUpgrade = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/upgrades",params,["listing_id"]);
    this.client.post(path,params,cb);
}

Listings.prototype.updateListingShippingUpgrade = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/upgrades",params,["listing_id"]);
    this.client.put(path,params,cb);
}

Listings.prototype.deleteListingShippingUpgrade = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/upgrades",params,["listing_id"]);
    this.client.delete(path,params,cb);
}

Listings.prototype.findAllListingTransactions = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/transactions",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.getListingTranslation = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/translations/:language",params,["listing_id","language"]);
    this.client.get(path,params,cb);
}

Listings.prototype.createListingTranslation = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/translations/:language",params,["listing_id","language"]);
    this.client.post(path,params,cb);
}

Listings.prototype.updateListingTranslation = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/translations/:language",params,["listing_id","language"]);
    this.client.put(path,params,cb);
}

Listings.prototype.deleteListingTranslation = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/translations/:language",params,["listing_id","language"]);
    this.client.delete(path,params,cb);
}

Listings.prototype.getVariationImages = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/variation-images",params,["listing_id"]);
    this.client.get(path,params,cb);
}

Listings.prototype.updateVariationImages = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/variation-images",params,["listing_id"]);
    this.client.post(path,params,cb);
}

Listings.prototype.findAllListingActive = function(params,cb){
    let path = utils.uriParams("/listings/active",params,);
    this.client.get(path,params,cb);
}

Listings.prototype.getInterestingListings = function(params,cb){
    let path = utils.uriParams("/listings/interesting",params,);
    this.client.get(path,params,cb);
}

Listings.prototype.getTrendingListings = function(params,cb){
    let path = utils.uriParams("/listings/trending",params,);
    this.client.get(path,params,cb);
}

module.exports = Listings
