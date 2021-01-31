
const utils = require("./utils.js");
function Pages(client){
    this.client = client
}
/*
Find a single page.
*/
Pages.prototype.findPage = function(params,cb){
    let path = utils.uriParams("/pages/:page_id",params,["page_id"]);
    this.client.get(path,params,cb);
}

/*
Update a Page's data.
*/
Pages.prototype.updatePageData = function(params,cb){
    let path = utils.uriParams("/pages/:page_id",params,["page_id"]);
    this.client.post(path,params,cb);
}

/*
Upload a new avatar
*/
Pages.prototype.uploadAvatar = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/avatar",params,["page_id"]);
    this.client.post(path,params,cb);
}

/*
See all of a page's public collections.
*/
Pages.prototype.findAllPageCollections = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections",params,["page_id"]);
    this.client.get(path,params,cb);
}

/*
Create a page collection for the given page.
*/
Pages.prototype.createPageCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections",params,["page_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieve a single page collection.
*/
Pages.prototype.getPageCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id",params,["page_id","collection_id"]);
    this.client.get(path,params,cb);
}

/*
Update a page collection.
*/
Pages.prototype.updatePageCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id",params,["page_id","collection_id"]);
    this.client.put(path,params,cb);
}

/*
Delete a page collection.
*/
Pages.prototype.deletePageCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id",params,["page_id","collection_id"]);
    this.client.delete(path,params,cb);
}

/*
Retrieve the listings for a single page collection.
*/
Pages.prototype.getCollectionListings = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id/listings",params,["page_id","collection_id"]);
    this.client.get(path,params,cb);
}

/*
Add a listing to a page collection
*/
Pages.prototype.addListingToCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id/listings/:listing_id",params,["page_id","collection_id","listing_id"]);
    this.client.post(path,params,cb);
}

/*
Remove a listing from a collection
*/
Pages.prototype.removeListingFromCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id/listings/:listing_id",params,["page_id","collection_id","listing_id"]);
    this.client.delete(path,params,cb);
}

/*
Find the collection ids for the authorized page and listing ids
*/
Pages.prototype.findPageCollectionsForListings = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/listings_map",params,["page_id"]);
    this.client.get(path,params,cb);
}

/*
Add a user as curator for a page.
*/
Pages.prototype.addCurator = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/curators/:curator_id",params,["page_id","curator_id"]);
    this.client.post(path,params,cb);
}

/*
Remove a user from curating page.
*/
Pages.prototype.removeCurator = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/curators/:curator_id",params,["page_id","curator_id"]);
    this.client.delete(path,params,cb);
}

/*
Search for people to add as curators.
*/
Pages.prototype.curatorPeopleSearch = function(params,cb){
    let path = utils.uriParams("/pages/find-curators",params,);
    this.client.get(path,params,cb);
}

module.exports = Pages
