
const utils = required("./Utils.js");
function Treasuries(client){
    this.client = client
}
Treasuries.prototype.findAllTreasuries = function(params,cb){
    let path = utils.uriParams("/treasuries",params,);
    this.client.get(path,params,cb);
}

Treasuries.prototype.getTreasury = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key",params,["treasury_key"]);
    this.client.get(path,params,cb);
}

Treasuries.prototype.deleteTreasury = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key",params,["treasury_key"]);
    this.client.delete(path,params,cb);
}

Treasuries.prototype.findTreasuryComments = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/comments",params,["treasury_key"]);
    this.client.get(path,params,cb);
}

Treasuries.prototype.postTreasuryComment = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/comments",params,["treasury_key"]);
    this.client.post(path,params,cb);
}

Treasuries.prototype.deleteTreasuryComment = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/comments/:comment_id",params,["treasury_key","comment_id"]);
    this.client.delete(path,params,cb);
}

Treasuries.prototype.addTreasuryListing = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/listings",params,["treasury_key"]);
    this.client.post(path,params,cb);
}

Treasuries.prototype.removeTreasuryListing = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/listings/:listing_id",params,["treasury_key","listing_id"]);
    this.client.delete(path,params,cb);
}

module.exports = Treasuries
