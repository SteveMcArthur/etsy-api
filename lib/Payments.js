
const utils = required("./Utils.js");
function Payments(client){
    this.client = client
}
Payments.prototype.findPayment = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id",params,["payment_id"]);
    this.client.get(path,params,cb);
}

Payments.prototype.findPaymentAdjustments = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id/adjustments",params,["payment_id"]);
    this.client.get(path,params,cb);
}

Payments.prototype.findPaymentAdjustment = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id/adjustments/:payment_adjustment_id",params,["payment_id","payment_adjustment_id"]);
    this.client.get(path,params,cb);
}

Payments.prototype.findPaymentAdjustmentItems = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id/adjustments/:payment_adjustment_id/items",params,["payment_id","payment_adjustment_id"]);
    this.client.get(path,params,cb);
}

Payments.prototype.findPaymentAdjustmentItem = function(params,cb){
    let path = utils.uriParams("/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id",params,["payment_id","payment_adjustment_id","payment_adjustment_item_id"]);
    this.client.get(path,params,cb);
}

module.exports = Payments
