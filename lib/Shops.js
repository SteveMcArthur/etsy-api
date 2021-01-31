
const utils = required("./Utils.js");
function Shops(client){
    this.client = client
}
Shops.prototype.findAllShops = function(params,cb){
    let path = utils.uriParams("/shops",params,);
    this.client.get(path,params,cb);
}

Shops.prototype.getShop = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.updateShop = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id",params,["shop_id"]);
    this.client.put(path,params,cb);
}

Shops.prototype.getShopAbout = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/about",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.uploadShopBanner = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/appearance/banner",params,["shop_id"]);
    this.client.post(path,params,cb);
}

Shops.prototype.deleteShopBanner = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/appearance/banner",params,["shop_id"]);
    this.client.delete(path,params,cb);
}

Shops.prototype.findAllShopCoupons = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.createCoupon = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons",params,["shop_id"]);
    this.client.post(path,params,cb);
}

Shops.prototype.findCoupon = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons/:coupon_id",params,["shop_id","coupon_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.updateCoupon = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons/:coupon_id",params,["shop_id","coupon_id"]);
    this.client.put(path,params,cb);
}

Shops.prototype.deleteCoupon = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/coupons/:coupon_id",params,["shop_id","coupon_id"]);
    this.client.delete(path,params,cb);
}

Shops.prototype.findLedger = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findLedgerEntries = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/entries",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/entries/:ledger_entry_id",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findPaymentAdjustmentForLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findPaymentForLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/ledger/entries/:ledger_entry_id/payment",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findAllShopListingsActive = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/active",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findAllShopListingsDraft = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/draft",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findAllShopListingsExpired = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/expired",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.getShopListingExpired = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/expired/:listing_id",params,["shop_id","listing_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findAllShopListingsFeatured = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/featured",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findAllShopListingsInactive = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/inactive",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.getShopListingInactive = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/listings/inactive/:listing_id",params,["shop_id","listing_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findPaymentAccountEntries = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_account/entries",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findPaymentAdjustmentForPaymentAccountLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findPaymentForPaymentAccountLedgerEntry = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_account/entries/:ledger_entry_id/payment",params,["shop_id","ledger_entry_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findShopPaymentTemplates = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_templates",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.createShopPaymentTemplate = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_templates",params,["shop_id"]);
    this.client.post(path,params,cb);
}

Shops.prototype.updateShopPaymentTemplate = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/payment_templates/:payment_template_id",params,["shop_id","payment_template_id"]);
    this.client.put(path,params,cb);
}

Shops.prototype.findAllShopReceipts = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findShopPaymentByReceipt = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts/:receipt_id/payments",params,["shop_id","receipt_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.submitTracking = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts/:receipt_id/tracking",params,["shop_id","receipt_id"]);
    this.client.post(path,params,cb);
}

Shops.prototype.findAllShopReceiptsByStatus = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts/:status",params,["shop_id","status"]);
    this.client.get(path,params,cb);
}

Shops.prototype.searchAllShopReceipts = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/receipts/search",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.getShopReviews = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/reviews",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findAllShopSections = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.createShopSection = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections",params,["shop_id"]);
    this.client.post(path,params,cb);
}

Shops.prototype.getShopSection = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id",params,["shop_id","shop_section_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.updateShopSection = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id",params,["shop_id","shop_section_id"]);
    this.client.put(path,params,cb);
}

Shops.prototype.deleteShopSection = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id",params,["shop_id","shop_section_id"]);
    this.client.delete(path,params,cb);
}

Shops.prototype.findAllShopSectionListings = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/listings",params,["shop_id","shop_section_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.findAllShopSectionListingsActive = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/listings/active",params,["shop_id","shop_section_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.getShopSectionTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/translations/:language",params,["shop_id","shop_section_id","language"]);
    this.client.get(path,params,cb);
}

Shops.prototype.createShopSectionTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/translations/:language",params,["shop_id","shop_section_id","language"]);
    this.client.post(path,params,cb);
}

Shops.prototype.updateShopSectionTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/translations/:language",params,["shop_id","shop_section_id","language"]);
    this.client.put(path,params,cb);
}

Shops.prototype.deleteShopSectionTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/sections/:shop_section_id/translations/:language",params,["shop_id","shop_section_id","language"]);
    this.client.delete(path,params,cb);
}

Shops.prototype.findAllShopTransactions = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/transactions",params,["shop_id"]);
    this.client.get(path,params,cb);
}

Shops.prototype.getShopTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/translations/:language",params,["shop_id","language"]);
    this.client.get(path,params,cb);
}

Shops.prototype.createShopTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/translations/:language",params,["shop_id","language"]);
    this.client.post(path,params,cb);
}

Shops.prototype.updateShopTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/translations/:language",params,["shop_id","language"]);
    this.client.put(path,params,cb);
}

Shops.prototype.deleteShopTranslation = function(params,cb){
    let path = utils.uriParams("/shops/:shop_id/translations/:language",params,["shop_id","language"]);
    this.client.delete(path,params,cb);
}

Shops.prototype.getListingShop = function(params,cb){
    let path = utils.uriParams("/shops/listing/:listing_id",params,["listing_id"]);
    this.client.get(path,params,cb);
}

module.exports = Shops
