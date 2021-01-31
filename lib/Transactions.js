
const utils = require("./Utils.js");
function Transactions(client){
    this.client = client
}
/*
Retrieves a Shop_Transaction by id.
*/
Transactions.prototype.getShop_Transaction = function(params,cb){
    let path = utils.uriParams("/transactions/:transaction_id",params,["transaction_id"]);
    this.client.get(path,params,cb);
}

module.exports = Transactions
