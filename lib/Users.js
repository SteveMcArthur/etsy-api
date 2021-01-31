
const utils = required("./Utils.js");
function Users(client){
    this.client = client
}
Users.prototype.findAllUsers = function(params,cb){
    let path = utils.uriParams("/users",params,);
    this.client.get(path,params,cb);
}

Users.prototype.getUser = function(params,cb){
    let path = utils.uriParams("/users/:user_id",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserAddresses = function(params,cb){
    let path = utils.uriParams("/users/:user_id/addresses",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.createUserAddress = function(params,cb){
    let path = utils.uriParams("/users/:user_id/addresses/",params,["user_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.getUserAddress = function(params,cb){
    let path = utils.uriParams("/users/:user_id/addresses/:user_address_id",params,["user_id","user_address_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.deleteUserAddress = function(params,cb){
    let path = utils.uriParams("/users/:user_id/addresses/:user_address_id",params,["user_id","user_address_id"]);
    this.client.delete(path,params,cb);
}

Users.prototype.uploadAvatar = function(params,cb){
    let path = utils.uriParams("/users/:user_id/avatar",params,["user_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.getAvatarImgSrc = function(params,cb){
    let path = utils.uriParams("/users/:user_id/avatar/src",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.getUserBillingOverview = function(params,cb){
    let path = utils.uriParams("/users/:user_id/billing/overview",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.getAllUserCarts = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.addToCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts",params,["user_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.updateCartListingQuantity = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts",params,["user_id"]);
    this.client.put(path,params,cb);
}

Users.prototype.removeCartListing = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts",params,["user_id"]);
    this.client.delete(path,params,cb);
}

Users.prototype.getUserCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id",params,["user_id","cart_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.updateCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id",params,["user_id","cart_id"]);
    this.client.put(path,params,cb);
}

Users.prototype.deleteCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id",params,["user_id","cart_id"]);
    this.client.delete(path,params,cb);
}

Users.prototype.addAndSelectShippingForApplePay = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple",params,["user_id","cart_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.findAllCartListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id/listings",params,["user_id","cart_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.saveListingForLater = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/save",params,["user_id"]);
    this.client.delete(path,params,cb);
}

Users.prototype.getUserCartForShop = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/shop/:shop_id",params,["user_id","shop_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.createSingleListingCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/single_listing",params,["user_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.findAllUserCharges = function(params,cb){
    let path = utils.uriParams("/users/:user_id/charges",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.getUserChargesMetadata = function(params,cb){
    let path = utils.uriParams("/users/:user_id/charges/meta",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.getCirclesContainingUser = function(params,cb){
    let path = utils.uriParams("/users/:user_id/circles",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.getConnectedUser = function(params,cb){
    let path = utils.uriParams("/users/:user_id/circles/:to_user_id",params,["user_id","to_user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.unconnectUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/circles/:to_user_id",params,["user_id","to_user_id"]);
    this.client.delete(path,params,cb);
}

Users.prototype.listFollowingPages = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_pages",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.followPage = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_pages",params,["user_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.unfollowPage = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_pages/:page_id",params,["user_id","page_id"]);
    this.client.delete(path,params,cb);
}

Users.prototype.getConnectedUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_users",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.connectUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_users",params,["user_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.findAllUserFavoredBy = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favored-by",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserFavoriteListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/listings",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findUserFavoriteListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/listings/:listing_id",params,["user_id","listing_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.createUserFavoriteListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/listings/:listing_id",params,["user_id","listing_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.deleteUserFavoriteListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/listings/:listing_id",params,["user_id","listing_id"]);
    this.client.delete(path,params,cb);
}

Users.prototype.findAllUserFavoriteUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/users",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findUserFavoriteUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/users/:target_user_id",params,["user_id","target_user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.createUserFavoriteUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/users/:target_user_id",params,["user_id","target_user_id"]);
    this.client.post(path,params,cb);
}

Users.prototype.deleteUserFavoriteUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/users/:target_user_id",params,["user_id","target_user_id"]);
    this.client.delete(path,params,cb);
}

Users.prototype.findAllUserFeedbackAsAuthor = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/as-author",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserFeedbackAsBuyer = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/as-buyer",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserFeedbackAsSeller = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/as-seller",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserFeedbackAsSubject = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/as-subject",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllFeedbackFromBuyers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/from-buyers",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllFeedbackFromSellers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/from-sellers",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserPayments = function(params,cb){
    let path = utils.uriParams("/users/:user_id/payments",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserPaymentTemplates = function(params,cb){
    let path = utils.uriParams("/users/:user_id/payments/templates",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findUserProfile = function(params,cb){
    let path = utils.uriParams("/users/:user_id/profile",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.updateUserProfile = function(params,cb){
    let path = utils.uriParams("/users/:user_id/profile",params,["user_id"]);
    this.client.put(path,params,cb);
}

Users.prototype.findAllUserBuyerReceipts = function(params,cb){
    let path = utils.uriParams("/users/:user_id/receipts",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserShippingProfiles = function(params,cb){
    let path = utils.uriParams("/users/:user_id/shipping/templates",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserShops = function(params,cb){
    let path = utils.uriParams("/users/:user_id/shops",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllTeamsForUser = function(params,cb){
    let path = utils.uriParams("/users/:user_id/teams",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserBuyerTransactions = function(params,cb){
    let path = utils.uriParams("/users/:user_id/transactions",params,["user_id"]);
    this.client.get(path,params,cb);
}

Users.prototype.findAllUserTreasuries = function(params,cb){
    let path = utils.uriParams("/users/:user_id/treasuries",params,["user_id"]);
    this.client.get(path,params,cb);
}

module.exports = Users
