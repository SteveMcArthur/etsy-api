
const utils = required("./Utils.js");
function Pages(client){
    this.client = client
}
Pages.prototype.findPage = function(params,cb){
    let path = utils.uriParams("/pages/:page_id",params,["page_id"]);
    this.client.get(path,params,cb);
}

Pages.prototype.updatePageData = function(params,cb){
    let path = utils.uriParams("/pages/:page_id",params,["page_id"]);
    this.client.post(path,params,cb);
}

Pages.prototype.uploadAvatar = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/avatar",params,["page_id"]);
    this.client.post(path,params,cb);
}

Pages.prototype.findAllPageCollections = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections",params,["page_id"]);
    this.client.get(path,params,cb);
}

Pages.prototype.createPageCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections",params,["page_id"]);
    this.client.post(path,params,cb);
}

Pages.prototype.getPageCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id",params,["page_id","collection_id"]);
    this.client.get(path,params,cb);
}

Pages.prototype.updatePageCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id",params,["page_id","collection_id"]);
    this.client.put(path,params,cb);
}

Pages.prototype.deletePageCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id",params,["page_id","collection_id"]);
    this.client.delete(path,params,cb);
}

Pages.prototype.getCollectionListings = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id/listings",params,["page_id","collection_id"]);
    this.client.get(path,params,cb);
}

Pages.prototype.addListingToCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id/listings/:listing_id",params,["page_id","collection_id","listing_id"]);
    this.client.post(path,params,cb);
}

Pages.prototype.removeListingFromCollection = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/:collection_id/listings/:listing_id",params,["page_id","collection_id","listing_id"]);
    this.client.delete(path,params,cb);
}

Pages.prototype.findPageCollectionsForListings = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/collections/listings_map",params,["page_id"]);
    this.client.get(path,params,cb);
}

Pages.prototype.addCurator = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/curators/:curator_id",params,["page_id","curator_id"]);
    this.client.post(path,params,cb);
}

Pages.prototype.removeCurator = function(params,cb){
    let path = utils.uriParams("/pages/:page_id/curators/:curator_id",params,["page_id","curator_id"]);
    this.client.delete(path,params,cb);
}

Pages.prototype.curatorPeopleSearch = function(params,cb){
    let path = utils.uriParams("/pages/find-curators",params,);
    this.client.get(path,params,cb);
}

module.exports = Pages
