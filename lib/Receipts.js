
const utils = require("./Utils.js");
function Receipts(client){
    this.client = client
}
/*
Retrieves a Shop_Receipt2 by id.
*/
Receipts.prototype.getShop_Receipt2 = function(params,cb){
    let path = utils.uriParams("/receipts/:receipt_id",params,["receipt_id"]);
    this.client.get(path,params,cb);
}

/*
Updates a Shop_Receipt2
*/
Receipts.prototype.updateReceipt = function(params,cb){
    let path = utils.uriParams("/receipts/:receipt_id",params,["receipt_id"]);
    this.client.put(path,params,cb);
}

/*
Finds all listings in a receipt
*/
Receipts.prototype.findAllReceiptListings = function(params,cb){
    let path = utils.uriParams("/receipts/:receipt_id/listings",params,["receipt_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of Transaction objects associated to a Shop_Receipt2.
*/
Receipts.prototype.findAllShop_Receipt2Transactions = function(params,cb){
    let path = utils.uriParams("/receipts/:receipt_id/transactions",params,["receipt_id"]);
    this.client.get(path,params,cb);
}

module.exports = Receipts
