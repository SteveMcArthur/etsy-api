
const utils = require("./utils");
function Treasuries(client){
    this.client = client
}
/*
Search Treasuries or else List all Treasuries
*/
Treasuries.prototype.findAllTreasuries = function(params,cb){
    let path = utils.uriParams("/treasuries",params,);
    this.client.get(path,params,cb);
}

/*
Get a Treasury
*/
Treasuries.prototype.getTreasury = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key",params,["treasury_key"]);
    this.client.get(path,params,cb);
}

/*
Delete a Treasury
*/
Treasuries.prototype.deleteTreasury = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key",params,["treasury_key"]);
    this.client.delete(path,params,cb);
}

/*
Get a Treasury's Comments
*/
Treasuries.prototype.findTreasuryComments = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/comments",params,["treasury_key"]);
    this.client.get(path,params,cb);
}

/*
Leave a comment on a Treasury List
*/
Treasuries.prototype.postTreasuryComment = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/comments",params,["treasury_key"]);
    this.client.post(path,params,cb);
}

/*
Delete a given comment on a Treasury List
*/
Treasuries.prototype.deleteTreasuryComment = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/comments/:comment_id",params,["treasury_key","comment_id"]);
    this.client.delete(path,params,cb);
}

/*
Add listing to a Treasury
*/
Treasuries.prototype.addTreasuryListing = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/listings",params,["treasury_key"]);
    this.client.post(path,params,cb);
}

/*
Remove listing from a Treasury
*/
Treasuries.prototype.removeTreasuryListing = function(params,cb){
    let path = utils.uriParams("/treasuries/:treasury_key/listings/:listing_id",params,["treasury_key","listing_id"]);
    this.client.delete(path,params,cb);
}

module.exports = Treasuries
