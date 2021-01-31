
const utils = required("./Utils.js");
function Transactions(client){
    this.client = client
}
Transactions.prototype.getShop_Transaction = function(params,cb){
    let path = utils.uriParams("/transactions/:transaction_id",params,["transaction_id"]);
    this.client.get(path,params,cb);
}

module.exports = Transactions
