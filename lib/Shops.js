
const utils = require("./utils.js");
function Shops(client){
    this.client = client
}
/*
Finds all Shops.If there is a keywords parameter, finds shops with shop_name starting with keywords.
*/
Shops.prototype.findAllShops = function(params,cb){
    let path = utils.uriParams("/shops",params,);
    this.client.get(path,params,cb);
}

/*
Retrieves a Shop by id.
*/
Shops.prototype.getShop = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Updates a Shop
*/
Shops.prototype.updateShop = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id",params,["shop_id"]);
    this.client.put(path,params,cb);
}

/*
Retrieves a ShopAbout object associated to a Shop.
*/
Shops.prototype.getShopAbout = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/about",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Upload a new shop banner image
*/
Shops.prototype.uploadShopBanner = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/appearance/banner",params,["shop_id"]);
    this.client.post(path,params,cb);
}

/*
Deletes a shop banner image
*/
Shops.prototype.deleteShopBanner = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/appearance/banner",params,["shop_id"]);
    this.client.delete(path,params,cb);
}

/*
Retrieves all Shop_Coupons by shop_id
*/
Shops.prototype.findAllShopCoupons = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new Coupon. May only have one of <code>free_shipping</code>, <code>pct_discount</code> or <code>fixed_discount</code>
*/
Shops.prototype.createCoupon = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons",params,["shop_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieves a Shop_Coupon by id and shop_id
*/
Shops.prototype.findCoupon = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons/:coupon_id",params,["shop_id","coupon_id"]);
    this.client.get(path,params,cb);
}

/*
Updates a coupon
*/
Shops.prototype.updateCoupon = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons/:coupon_id",params,["shop_id","coupon_id"]);
    this.client.put(path,params,cb);
}

/*
Deletes a coupon
*/
Shops.prototype.deleteCoupon = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons/:coupon_id",params,["shop_id","coupon_id"]);
    this.client.delete(path,params,cb);
}

/*
Get a Shop Payment Account Ledger
*/
Shops.prototype.findLedger = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Shop Payment Account Ledger's Entries
*/
Shops.prototype.findLedgerEntries = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/entries",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Shop Payment Account Ledger Entry
*/
Shops.prototype.findLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/entries/:ledger_entry_id",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Payment Adjustment from a Ledger Entry ID, if applicable
*/
Shops.prototype.findPaymentAdjustmentForLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Payment from a Ledger Entry ID, if applicable
*/
Shops.prototype.findPaymentForLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

/*
Finds all active Listings associated with a Shop.<br /><br />(<strong>NOTE:</strong> If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter <strong>include_private = true</strong>.This will return private listings that are not publicly visible in the shop, but which can be managed.This is an experimental feature and may change.)
*/
Shops.prototype.findAllShopListingsActive = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/active",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Finds all of a Shop's draft listings
*/
Shops.prototype.findAllShopListingsDraft = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/draft",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves Listings associated to a Shop that are expired
*/
Shops.prototype.findAllShopListingsExpired = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/expired",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a Listing associated to a Shop that is inactive
*/
Shops.prototype.getShopListingExpired = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/expired/:listing_id",params,["shop_id","listing_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves Listings associated to a Shop that are featured
*/
Shops.prototype.findAllShopListingsFeatured = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/featured",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves Listings associated to a Shop that are inactive
*/
Shops.prototype.findAllShopListingsInactive = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/inactive",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a Listing associated to a Shop that is inactive
*/
Shops.prototype.getShopListingInactive = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/inactive/:listing_id",params,["shop_id","listing_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Shop Payment Account Ledger's Entries
*/
Shops.prototype.findPaymentAccountEntries = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_account/entries",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Payment Adjustment from a Payment Account Ledger Entry ID, if applicable
*/
Shops.prototype.findPaymentAdjustmentForPaymentAccountLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Payment from a PaymentAccount Ledger Entry ID, if applicable
*/
Shops.prototype.findPaymentForPaymentAccountLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_account/entries/:ledger_entry_id/payment",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves the PaymentTemplate associated with the Shop
*/
Shops.prototype.findShopPaymentTemplates = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_templates",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new PaymentTemplate
*/
Shops.prototype.createShopPaymentTemplate = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_templates",params,["shop_id"]);
    this.client.post(path,params,cb);
}

/*
Updates a PaymentTemplate
*/
Shops.prototype.updateShopPaymentTemplate = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_templates/:payment_template_id",params,["shop_id","payment_template_id"]);
    this.client.put(path,params,cb);
}

/*
Retrieves a set of Receipt objects associated to a Shop.
*/
Shops.prototype.findAllShopReceipts = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Get a Payment by Shop Receipt ID
*/
Shops.prototype.findShopPaymentByReceipt = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts/:receipt_id/payments",params,["shop_id","receipt_id"]);
    this.client.get(path,params,cb);
}

/*
Submits tracking information and sends a shipping notification email to the buyer. If <code>send_bcc</code> is <code>true</code>, the shipping notification will be sent to the seller as well. Refer to <a href="/developers/documentation/getting_started/seller_tools#section_tracking_codes">additional documentation</a>.
*/
Shops.prototype.submitTracking = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts/:receipt_id/tracking",params,["shop_id","receipt_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieves a set of Receipt objects associated to a Shop based on the status.
*/
Shops.prototype.findAllShopReceiptsByStatus = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts/:status",params,["shop_id","status"]);
    this.client.get(path,params,cb);
}

/*
Searches the set of Receipt objects associated to a Shop by a query
*/
Shops.prototype.searchAllShopReceipts = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts/search",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a list of reviews left for listings purchased from a shop
*/
Shops.prototype.getShopReviews = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/reviews",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a set of ShopSection objects associated to a Shop.
*/
Shops.prototype.findAllShopSections = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new ShopSection.
*/
Shops.prototype.createShopSection = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections",params,["shop_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieves a ShopSection by id and shop_id
*/
Shops.prototype.getShopSection = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id",params,["shop_id","shop_section_id"]);
    this.client.get(path,params,cb);
}

/*
Updates a ShopSection with the given id.
*/
Shops.prototype.updateShopSection = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id",params,["shop_id","shop_section_id"]);
    this.client.put(path,params,cb);
}

/*
Deletes the ShopSection with the given id.
*/
Shops.prototype.deleteShopSection = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id",params,["shop_id","shop_section_id"]);
    this.client.delete(path,params,cb);
}

/*
Finds all listings within a shop section
*/
Shops.prototype.findAllShopSectionListings = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/listings",params,["shop_id","shop_section_id"]);
    this.client.get(path,params,cb);
}

/*
Finds all listings within a shop section
*/
Shops.prototype.findAllShopSectionListingsActive = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/listings/active",params,["shop_id","shop_section_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
*/
Shops.prototype.getShopSectionTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/translations/:language",params,["shop_id","shop_section_id","language"]);
    this.client.get(path,params,cb);
}

/*
Creates a ShopSectionTranslation by shop_id, shop_section_id and language
*/
Shops.prototype.createShopSectionTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/translations/:language",params,["shop_id","shop_section_id","language"]);
    this.client.post(path,params,cb);
}

/*
Updates a ShopSectionTranslation by shop_id, shop_section_id and language
*/
Shops.prototype.updateShopSectionTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/translations/:language",params,["shop_id","shop_section_id","language"]);
    this.client.put(path,params,cb);
}

/*
Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
*/
Shops.prototype.deleteShopSectionTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/translations/:language",params,["shop_id","shop_section_id","language"]);
    this.client.delete(path,params,cb);
}

/*
Retrieves a set of Transaction objects associated to a Shop.
*/
Shops.prototype.findAllShopTransactions = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/transactions",params,["shop_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a ShopTranslation by shop_id and language
*/
Shops.prototype.getShopTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/translations/:language",params,["shop_id","language"]);
    this.client.get(path,params,cb);
}

/*
Creates a ShopTranslation by shop_id and language
*/
Shops.prototype.createShopTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/translations/:language",params,["shop_id","language"]);
    this.client.post(path,params,cb);
}

/*
Updates a ShopTranslation by shop_id and language
*/
Shops.prototype.updateShopTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/translations/:language",params,["shop_id","language"]);
    this.client.put(path,params,cb);
}

/*
Deletes a ShopTranslation by shop_id and language
*/
Shops.prototype.deleteShopTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/translations/:language",params,["shop_id","language"]);
    this.client.delete(path,params,cb);
}

/*
Retrieves a shop by a listing id.
*/
Shops.prototype.getListingShop = function(params,cb){
    let path = utils.uriParams("/shops/listing/:listing_id",params,["listing_id"]);
    this.client.get(path,params,cb);
}

module.exports = Shops
