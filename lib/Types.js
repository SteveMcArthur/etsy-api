
const utils = require("./utils");
function Types(client){
    this.client = client
}
/*
Describes the legal values for Listing.occasion.
*/
Types.prototype.describeOccasionEnum = function(params,cb){
    let path = utils.uriParams("/types/enum/occasion",params,);
    this.client.get(path,params,cb);
}

/*
Describes the legal values for Listing.recipient.
*/
Types.prototype.describeRecipientEnum = function(params,cb){
    let path = utils.uriParams("/types/enum/recipient",params,);
    this.client.get(path,params,cb);
}

/*
Describes the legal values for Listing.when_made.
*/
Types.prototype.describeWhenMadeEnum = function(params,cb){
    let path = utils.uriParams("/types/enum/when_made",params,);
    this.client.get(path,params,cb);
}

/*
Describes the legal values for Listing.who_made.
*/
Types.prototype.describeWhoMadeEnum = function(params,cb){
    let path = utils.uriParams("/types/enum/who_made",params,);
    this.client.get(path,params,cb);
}

module.exports = Types
