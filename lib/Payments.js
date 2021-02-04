
const utils = require("./utils");
function Payments(client){
    this.client = client
}
/*
Get an Etsy Payments Transaction
*/
Payments.prototype.findPayment = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id",params,["payment_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Payment Adjustments from a Payment Id
*/
Payments.prototype.findPaymentAdjustments = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id/adjustments",params,["payment_id"]);
    this.client.get(path,params,cb);
}

/*
Get an Etsy Payments Transaction Adjustment
*/
Payments.prototype.findPaymentAdjustment = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id/adjustments/:payment_adjustment_id",params,["payment_id","payment_adjustment_id"]);
    this.client.get(path,params,cb);
}

/*
Get Etsy Payments Transaction Adjustment Items
*/
Payments.prototype.findPaymentAdjustmentItems = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id/adjustments/:payment_adjustment_id/items",params,["payment_id","payment_adjustment_id"]);
    this.client.get(path,params,cb);
}

/*
Get an Etsy Payments Transaction Adjustment Item
*/
Payments.prototype.findPaymentAdjustmentItem = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id",params,["payment_id","payment_adjustment_id","payment_adjustment_item_id"]);
    this.client.get(path,params,cb);
}

module.exports = Payments
