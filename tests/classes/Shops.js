
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"findAllShops",
"getShop",
"updateShop",
"getShopAbout",
"uploadShopBanner",
"deleteShopBanner",
"findAllShopCoupons",
"createCoupon",
"findCoupon",
"updateCoupon",
"deleteCoupon",
"findLedger",
"findLedgerEntries",
"findLedgerEntry",
"findPaymentAdjustmentForLedgerEntry",
"findPaymentForLedgerEntry",
"findAllShopListingsActive",
"findAllShopListingsDraft",
"findAllShopListingsExpired",
"getShopListingExpired",
"findAllShopListingsFeatured",
"findAllShopListingsInactive",
"getShopListingInactive",
"findPaymentAccountEntries",
"findPaymentAdjustmentForPaymentAccountLedgerEntry",
"findPaymentForPaymentAccountLedgerEntry",
"findShopPaymentTemplates",
"createShopPaymentTemplate",
"updateShopPaymentTemplate",
"findAllShopReceipts",
"findShopPaymentByReceipt",
"submitTracking",
"findAllShopReceiptsByStatus",
"searchAllShopReceipts",
"getShopReviews",
"findAllShopSections",
"createShopSection",
"getShopSection",
"updateShopSection",
"deleteShopSection",
"findAllShopSectionListings",
"findAllShopSectionListingsActive",
"getShopSectionTranslation",
"createShopSectionTranslation",
"updateShopSectionTranslation",
"deleteShopSectionTranslation",
"findAllShopTransactions",
"getShopTranslation",
"createShopTranslation",
"updateShopTranslation",
"deleteShopTranslation",
"getListingShop",
];

describe('EtsyApi.Shops methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = Shops
