
const utils = require("./utils.js");
function Guests(client){
    this.client = client
}
/*
Get a guest by ID.
*/
Guests.prototype.getGuest = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id",params,["guest_id"]);
    this.client.get(path,params,cb);
}

/*
Get all guest's carts
*/
Guests.prototype.findAllGuestCarts = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts",params,["guest_id"]);
    this.client.get(path,params,cb);
}

/*
Add a listing to guest's cart
*/
Guests.prototype.addToGuestCart = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts",params,["guest_id"]);
    this.client.post(path,params,cb);
}

/*
Update a guest's cart listing purchase quantity
*/
Guests.prototype.updateGuestCartListingQuantity = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts",params,["guest_id"]);
    this.client.put(path,params,cb);
}

/*
Remove a listing from a guest's cart
*/
Guests.prototype.removeGuestCartListing = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts",params,["guest_id"]);
    this.client.delete(path,params,cb);
}

/*
Get a guest's cart
*/
Guests.prototype.findGuestCart = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts/:cart_id",params,["guest_id","cart_id"]);
    this.client.get(path,params,cb);
}

/*
Update a guest's cart
*/
Guests.prototype.updateGuestCart = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts/:cart_id",params,["guest_id","cart_id"]);
    this.client.put(path,params,cb);
}

/*
Delete a guest's cart
*/
Guests.prototype.deleteGuestCart = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/carts/:cart_id",params,["guest_id","cart_id"]);
    this.client.delete(path,params,cb);
}

/*
Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
*/
Guests.prototype.claimGuest = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/claim",params,["guest_id"]);
    this.client.post(path,params,cb);
}

/*
Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
*/
Guests.prototype.mergeGuest = function(params,cb){
    let path = utils.uriParams("/guests/:guest_id/merge",params,["guest_id"]);
    this.client.post(path,params,cb);
}

/*
A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
*/
Guests.prototype.generateGuest = function(params,cb){
    let path = utils.uriParams("/guests/generator",params,);
    this.client.get(path,params,cb);
}

module.exports = Guests
