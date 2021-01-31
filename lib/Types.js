
const utils = required("./Utils.js");
function Types(client){
    this.client = client
}
Types.prototype.describeOccasionEnum = function(params,cb){
    let path = utils.uriParams("/types/enum/occasion",params,);
    this.client.get(path,params,cb);
}

Types.prototype.describeRecipientEnum = function(params,cb){
    let path = utils.uriParams("/types/enum/recipient",params,);
    this.client.get(path,params,cb);
}

Types.prototype.describeWhenMadeEnum = function(params,cb){
    let path = utils.uriParams("/types/enum/when_made",params,);
    this.client.get(path,params,cb);
}

Types.prototype.describeWhoMadeEnum = function(params,cb){
    let path = utils.uriParams("/types/enum/who_made",params,);
    this.client.get(path,params,cb);
}

module.exports = Types
