
const utils = require("./Utils.js");
function Users(client){
    this.client = client
}
/*
Finds all Users whose name or username match the keywords parameter.
*/
Users.prototype.findAllUsers = function(params,cb){
    let path = utils.uriParams("/users",params,);
    this.client.get(path,params,cb);
}

/*
Retrieves a User by id.
*/
Users.prototype.getUser = function(params,cb){
    let path = utils.uriParams("/users/:user_id",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of UserAddress objects associated to a User.
*/
Users.prototype.findAllUserAddresses = function(params,cb){
    let path = utils.uriParams("/users/:user_id/addresses",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
*/
Users.prototype.createUserAddress = function(params,cb){
    let path = utils.uriParams("/users/:user_id/addresses/",params,["user_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieves a UserAddress by id.
*/
Users.prototype.getUserAddress = function(params,cb){
    let path = utils.uriParams("/users/:user_id/addresses/:user_address_id",params,["user_id","user_address_id"]);
    this.client.get(path,params,cb);
}

/*
Deletes the UserAddress with the given id.
*/
Users.prototype.deleteUserAddress = function(params,cb){
    let path = utils.uriParams("/users/:user_id/addresses/:user_address_id",params,["user_id","user_address_id"]);
    this.client.delete(path,params,cb);
}

/*
Upload a new user avatar image
*/
Users.prototype.uploadAvatar = function(params,cb){
    let path = utils.uriParams("/users/:user_id/avatar",params,["user_id"]);
    this.client.post(path,params,cb);
}

/*
Get avatar image source
*/
Users.prototype.getAvatarImgSrc = function(params,cb){
    let path = utils.uriParams("/users/:user_id/avatar/src",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves the user's current balance.
*/
Users.prototype.getUserBillingOverview = function(params,cb){
    let path = utils.uriParams("/users/:user_id/billing/overview",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Get a user's Carts
*/
Users.prototype.getAllUserCarts = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Add a listing to a cart
*/
Users.prototype.addToCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts",params,["user_id"]);
    this.client.post(path,params,cb);
}

/*
Update a cart listing purchase quantity
*/
Users.prototype.updateCartListingQuantity = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts",params,["user_id"]);
    this.client.put(path,params,cb);
}

/*
Remove a listing from a cart
*/
Users.prototype.removeCartListing = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts",params,["user_id"]);
    this.client.delete(path,params,cb);
}

/*
Get a cart
*/
Users.prototype.getUserCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id",params,["user_id","cart_id"]);
    this.client.get(path,params,cb);
}

/*
Update a cart
*/
Users.prototype.updateCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id",params,["user_id","cart_id"]);
    this.client.put(path,params,cb);
}

/*
Delete a cart
*/
Users.prototype.deleteCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id",params,["user_id","cart_id"]);
    this.client.delete(path,params,cb);
}

/*
Saves and selects a shipping address for apple pay
*/
Users.prototype.addAndSelectShippingForApplePay = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple",params,["user_id","cart_id"]);
    this.client.post(path,params,cb);
}

/*
Finds all listings in a given Cart
*/
Users.prototype.findAllCartListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/:cart_id/listings",params,["user_id","cart_id"]);
    this.client.get(path,params,cb);
}

/*
Move a listing to Saved for Later
*/
Users.prototype.saveListingForLater = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/save",params,["user_id"]);
    this.client.delete(path,params,cb);
}

/*
Get a cart from a shop ID
*/
Users.prototype.getUserCartForShop = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/shop/:shop_id",params,["user_id","shop_id"]);
    this.client.get(path,params,cb);
}

/*
Create a single-listing cart from a listing
*/
Users.prototype.createSingleListingCart = function(params,cb){
    let path = utils.uriParams("/users/:user_id/carts/single_listing",params,["user_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
*/
Users.prototype.findAllUserCharges = function(params,cb){
    let path = utils.uriParams("/users/:user_id/charges",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Metadata for the set of BillCharges objects associated to a User
*/
Users.prototype.getUserChargesMetadata = function(params,cb){
    let path = utils.uriParams("/users/:user_id/charges/meta",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Returns a list of users who have circled this user
*/
Users.prototype.getCirclesContainingUser = function(params,cb){
    let path = utils.uriParams("/users/:user_id/circles",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Returns details about a connection between users
*/
Users.prototype.getConnectedUser = function(params,cb){
    let path = utils.uriParams("/users/:user_id/circles/:to_user_id",params,["user_id","to_user_id"]);
    this.client.get(path,params,cb);
}

/*
Removes a user (to_user_id) from the logged in user's (user_id) circle
*/
Users.prototype.unconnectUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/circles/:to_user_id",params,["user_id","to_user_id"]);
    this.client.delete(path,params,cb);
}

/*
Lists the pages that the current user is following
*/
Users.prototype.listFollowingPages = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_pages",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Follow a page.
*/
Users.prototype.followPage = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_pages",params,["user_id"]);
    this.client.post(path,params,cb);
}

/*
Unfollow a page.
*/
Users.prototype.unfollowPage = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_pages/:page_id",params,["user_id","page_id"]);
    this.client.delete(path,params,cb);
}

/*
Returns a list of users that are in this user's cricle
*/
Users.prototype.getConnectedUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_users",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Adds user (to_user_id) to the user's (user_id) circle
*/
Users.prototype.connectUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/connected_users",params,["user_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieves a set of FavoriteUser objects associated to a User.
*/
Users.prototype.findAllUserFavoredBy = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favored-by",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Finds all favorite listings for a user
*/
Users.prototype.findAllUserFavoriteListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/listings",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Finds a favorite listing for a user
*/
Users.prototype.findUserFavoriteListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/listings/:listing_id",params,["user_id","listing_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new favorite listing for a user
*/
Users.prototype.createUserFavoriteListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/listings/:listing_id",params,["user_id","listing_id"]);
    this.client.post(path,params,cb);
}

/*
Delete a favorite listing for a user
*/
Users.prototype.deleteUserFavoriteListings = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/listings/:listing_id",params,["user_id","listing_id"]);
    this.client.delete(path,params,cb);
}

/*
Finds all favorite users for a user
*/
Users.prototype.findAllUserFavoriteUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/users",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Finds a favorite user for a user
*/
Users.prototype.findUserFavoriteUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/users/:target_user_id",params,["user_id","target_user_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new favorite listing for a user
*/
Users.prototype.createUserFavoriteUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/users/:target_user_id",params,["user_id","target_user_id"]);
    this.client.post(path,params,cb);
}

/*
Delete a favorite listing for a user
*/
Users.prototype.deleteUserFavoriteUsers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/favorites/users/:target_user_id",params,["user_id","target_user_id"]);
    this.client.delete(path,params,cb);
}

/*
Retrieves a set of Feedback objects associated to a User.
*/
Users.prototype.findAllUserFeedbackAsAuthor = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/as-author",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of Feedback objects associated to a User.
*/
Users.prototype.findAllUserFeedbackAsBuyer = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/as-buyer",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of Feedback objects associated to a User.
*/
Users.prototype.findAllUserFeedbackAsSeller = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/as-seller",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of Feedback objects associated to a User.
*/
Users.prototype.findAllUserFeedbackAsSubject = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/as-subject",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Returns a set of FeedBack objects associated to a User.
 This is essentially the union between the findAllUserFeedbackAsBuyer
 and findAllUserFeedbackAsSubject methods.
*/
Users.prototype.findAllFeedbackFromBuyers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/from-buyers",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Returns a set of FeedBack objects associated to a User.
 This is essentially the union between
 the findAllUserFeedbackAsBuyer and findAllUserFeedbackAsSubject methods.
*/
Users.prototype.findAllFeedbackFromSellers = function(params,cb){
    let path = utils.uriParams("/users/:user_id/feedback/from-sellers",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of BillPayment objects associated to a User.
*/
Users.prototype.findAllUserPayments = function(params,cb){
    let path = utils.uriParams("/users/:user_id/payments",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of PaymentTemplate objects associated to a User.
*/
Users.prototype.findAllUserPaymentTemplates = function(params,cb){
    let path = utils.uriParams("/users/:user_id/payments/templates",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Returns the UserProfile object associated with a User.
*/
Users.prototype.findUserProfile = function(params,cb){
    let path = utils.uriParams("/users/:user_id/profile",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Updates the UserProfile object associated with a User. <br /><b>Notes:</b><ul><li>Name changes are subject to admin review and therefore unavailable via the API.</li><li>Materials must be provided as a <i>period-separated</i> list of ASCII words.</ul>
*/
Users.prototype.updateUserProfile = function(params,cb){
    let path = utils.uriParams("/users/:user_id/profile",params,["user_id"]);
    this.client.put(path,params,cb);
}

/*
Retrieves a set of Receipt objects associated to a User.
*/
Users.prototype.findAllUserBuyerReceipts = function(params,cb){
    let path = utils.uriParams("/users/:user_id/receipts",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of ShippingTemplate objects associated to a User.
*/
Users.prototype.findAllUserShippingProfiles = function(params,cb){
    let path = utils.uriParams("/users/:user_id/shipping/templates",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of Shop objects associated to a User.
*/
Users.prototype.findAllUserShops = function(params,cb){
    let path = utils.uriParams("/users/:user_id/shops",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Returns a list of teams for a specific user
*/
Users.prototype.findAllTeamsForUser = function(params,cb){
    let path = utils.uriParams("/users/:user_id/teams",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of Transaction objects associated to a User.
*/
Users.prototype.findAllUserBuyerTransactions = function(params,cb){
    let path = utils.uriParams("/users/:user_id/transactions",params,["user_id"]);
    this.client.get(path,params,cb);
}

/*
Get a user's Treasuries. <strong>Note:</strong> The <code>treasury_r</code> permission scope is required in order to display private Treasuries for a user when the boolean parameter <code>include_private</code> is <code>true</code>.
*/
Users.prototype.findAllUserTreasuries = function(params,cb){
    let path = utils.uriParams("/users/:user_id/treasuries",params,["user_id"]);
    this.client.get(path,params,cb);
}

module.exports = Users
