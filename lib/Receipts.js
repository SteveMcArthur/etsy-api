
const utils = required("./Utils.js");
function Receipts(client){
    this.client = client
}
Receipts.prototype.getShop_Receipt2 = function(params,cb){
    let path = utils.uriParams("/receipts/:receipt_id",params,["receipt_id"]);
    this.client.get(path,params,cb);
}

Receipts.prototype.updateReceipt = function(params,cb){
    let path = utils.uriParams("/receipts/:receipt_id",params,["receipt_id"]);
    this.client.put(path,params,cb);
}

Receipts.prototype.findAllReceiptListings = function(params,cb){
    let path = utils.uriParams("/receipts/:receipt_id/listings",params,["receipt_id"]);
    this.client.get(path,params,cb);
}

Receipts.prototype.findAllShop_Receipt2Transactions = function(params,cb){
    let path = utils.uriParams("/receipts/:receipt_id/transactions",params,["receipt_id"]);
    this.client.get(path,params,cb);
}

module.exports = Receipts
