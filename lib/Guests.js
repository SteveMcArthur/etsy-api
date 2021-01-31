
const utils = required("./Utils.js");
function Guests(client){
    this.client = client
}
Guests.prototype.getGuest = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id",params,["guest_id"]);
    this.client.get(path,params,cb);
}

Guests.prototype.findAllGuestCarts = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts",params,["guest_id"]);
    this.client.get(path,params,cb);
}

Guests.prototype.addToGuestCart = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts",params,["guest_id"]);
    this.client.post(path,params,cb);
}

Guests.prototype.updateGuestCartListingQuantity = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts",params,["guest_id"]);
    this.client.put(path,params,cb);
}

Guests.prototype.removeGuestCartListing = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts",params,["guest_id"]);
    this.client.delete(path,params,cb);
}

Guests.prototype.findGuestCart = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts/:cart_id",params,["guest_id","cart_id"]);
    this.client.get(path,params,cb);
}

Guests.prototype.updateGuestCart = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts/:cart_id",params,["guest_id","cart_id"]);
    this.client.put(path,params,cb);
}

Guests.prototype.deleteGuestCart = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts/:cart_id",params,["guest_id","cart_id"]);
    this.client.delete(path,params,cb);
}

Guests.prototype.claimGuest = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/claim",params,["guest_id"]);
    this.client.post(path,params,cb);
}

Guests.prototype.mergeGuest = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/merge",params,["guest_id"]);
    this.client.post(path,params,cb);
}

Guests.prototype.generateGuest = function(params,cb){
    let path = utils.uriParams("/guests/generator",params,);
    this.client.get(path,params,cb);
}

module.exports = Guests
