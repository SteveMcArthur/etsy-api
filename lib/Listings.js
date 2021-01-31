
const utils = require("./Utils.js");
function Listings(client){
    this.client = client
}
/*
Creates a new Listing.
*/
Listings.prototype.createListing = function(params,cb){
    let path = utils.uriParams("/listings",params,);
    this.client.post(path,params,cb);
}

/*
Retrieves a Listing by id.
*/
Listings.prototype.getListing = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Updates a Listing
*/
Listings.prototype.updateListing = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id",params,["listing_id"]);
    this.client.put(path,params,cb);
}

/*
Deletes a Listing
*/
Listings.prototype.deleteListing = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id",params,["listing_id"]);
    this.client.delete(path,params,cb);
}

/*
Get all of the attributes for a listing
*/
Listings.prototype.getAttributes = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/attributes",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Get an attribute for a listing
*/
Listings.prototype.getAttribute = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/attributes/:property_id",params,["listing_id","property_id"]);
    this.client.get(path,params,cb);
}

/*
Update or populate an attribute for a listing
*/
Listings.prototype.updateAttribute = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/attributes/:property_id",params,["listing_id","property_id"]);
    this.client.put(path,params,cb);
}

/*
Delete an attribute for a listing
*/
Listings.prototype.deleteAttribute = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/attributes/:property_id",params,["listing_id","property_id"]);
    this.client.delete(path,params,cb);
}

/*
Retrieves a set of FavoriteListing objects associated to a Listing.
*/
Listings.prototype.findAllListingFavoredBy = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/favored-by",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Finds all ListingFiles on a Listing
*/
Listings.prototype.findAllListingFiles = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/files",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Upload a new listing file, or attach an existing file to this listing.You must either provide the listing_file_id
of an existing listing file, or the name and file data of a new file that you are uploading.If you are attaching
a file to a listing that is currently not digital, the listing will be converted to a digital listing.This will
cause the listing to have free shipping and will remove any variations.
*/
Listings.prototype.uploadListingFile = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/files",params,["listing_id"]);
    this.client.post(path,params,cb);
}

/*
Finds a ListingFile by ID
*/
Listings.prototype.findListingFile = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/files/:listing_file_id",params,["listing_id","listing_file_id"]);
    this.client.get(path,params,cb);
}

/*
Removes the listing file from this listing.If this is the last file on a listing, the listing will no longer
be considered a digital listing.
*/
Listings.prototype.deleteListingFile = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/files/:listing_file_id",params,["listing_id","listing_file_id"]);
    this.client.delete(path,params,cb);
}

/*
Retrieves a set of ListingImage objects associated to a Listing.
*/
Listings.prototype.findAllListingImages = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/images",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Upload a new listing image, or re-associate a previously deleted one. You may associate an image
 to any listing within the same shop that the image's original listing belongs to.
 You MUST pass either a listing_image_id OR an image to this method.
 Passing a listing_image_id serves to re-associate an image that was previously deleted.
 If you wish to re-associate an image, we strongly recommend using the listing_image_id
 argument as opposed to re-uploading a new image each time, to save bandwidth for you as well as us.
 Pass overwrite=1 to replace the existing image at a given rank.
 When uploading a new listing image with a watermark, pass is_watermarked=1; existing listing images
 will not be affected by this parameter.
*/
Listings.prototype.uploadListingImage = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/images",params,["listing_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieves a Image_Listing by id.
*/
Listings.prototype.getImage_Listing = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/images/:listing_image_id",params,["listing_id","listing_image_id"]);
    this.client.get(path,params,cb);
}

/*
Deletes a listing image. A copy of the file remains on our servers,
and so a deleted image may be re-associated with the listing without
re-uploading the original image; see uploadListingImage
*/
Listings.prototype.deleteListingImage = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/images/:listing_image_id",params,["listing_id","listing_image_id"]);
    this.client.delete(path,params,cb);
}

/*
Get the inventory for a listing
*/
Listings.prototype.getInventory = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/inventory",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Update the inventory for a listing
*/
Listings.prototype.updateInventory = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/inventory",params,["listing_id"]);
    this.client.put(path,params,cb);
}

/*
Get a specific offering for a listing
*/
Listings.prototype.getProduct = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/products/:product_id",params,["listing_id","product_id"]);
    this.client.get(path,params,cb);
}

/*
Get a specific offering for a listing
*/
Listings.prototype.getOffering = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/products/:product_id/offerings/:offering_id",params,["listing_id","product_id","offering_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of ShippingProfileEntries objects associated to a Listing.
*/
Listings.prototype.findAllListingShippingProfileEntries = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/info",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new ShippingInfo.
*/
Listings.prototype.createShippingInfo = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/info",params,["listing_id"]);
    this.client.post(path,params,cb);
}

/*
Get the shipping upgrades available for a listing.
*/
Listings.prototype.getListingShippingUpgrades = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/upgrades",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
*/
Listings.prototype.createListingShippingUpgrade = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/upgrades",params,["listing_id"]);
    this.client.post(path,params,cb);
}

/*
Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
*/
Listings.prototype.updateListingShippingUpgrade = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/upgrades",params,["listing_id"]);
    this.client.put(path,params,cb);
}

/*
Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
*/
Listings.prototype.deleteListingShippingUpgrade = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/shipping/upgrades",params,["listing_id"]);
    this.client.delete(path,params,cb);
}

/*
Retrieves a set of Transaction objects associated to a Listing.
*/
Listings.prototype.findAllListingTransactions = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/transactions",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a ListingTranslation by listing_id and language
*/
Listings.prototype.getListingTranslation = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/translations/:language",params,["listing_id","language"]);
    this.client.get(path,params,cb);
}

/*
Creates a ListingTranslation by listing_id and language
*/
Listings.prototype.createListingTranslation = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/translations/:language",params,["listing_id","language"]);
    this.client.post(path,params,cb);
}

/*
Updates a ListingTranslation by listing_id and language
*/
Listings.prototype.updateListingTranslation = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/translations/:language",params,["listing_id","language"]);
    this.client.put(path,params,cb);
}

/*
Deletes a ListingTranslation by listing_id and language
*/
Listings.prototype.deleteListingTranslation = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/translations/:language",params,["listing_id","language"]);
    this.client.delete(path,params,cb);
}

/*
Gets all variation images on a listing
*/
Listings.prototype.getVariationImages = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/variation-images",params,["listing_id"]);
    this.client.get(path,params,cb);
}

/*
Creates variation images on a listing
*/
Listings.prototype.updateVariationImages = function(params,cb){
    let path = utils.uriParams("/listings/:listing_id/variation-images",params,["listing_id"]);
    this.client.post(path,params,cb);
}

/*
Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
*/
Listings.prototype.findAllListingActive = function(params,cb){
    let path = utils.uriParams("/listings/active",params,);
    this.client.get(path,params,cb);
}

/*
Collects the list of interesting listings
*/
Listings.prototype.getInterestingListings = function(params,cb){
    let path = utils.uriParams("/listings/interesting",params,);
    this.client.get(path,params,cb);
}

/*
Collects the list of listings used to generate the trending listing page
*/
Listings.prototype.getTrendingListings = function(params,cb){
    let path = utils.uriParams("/listings/trending",params,);
    this.client.get(path,params,cb);
}

module.exports = Listings
