
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"createListing",
"getListing",
"updateListing",
"deleteListing",
"getAttributes",
"getAttribute",
"updateAttribute",
"deleteAttribute",
"findAllListingFavoredBy",
"findAllListingFiles",
"uploadListingFile",
"findListingFile",
"deleteListingFile",
"findAllListingImages",
"uploadListingImage",
"getImage_Listing",
"deleteListingImage",
"getInventory",
"updateInventory",
"getProduct",
"getOffering",
"findAllListingShippingProfileEntries",
"createShippingInfo",
"getListingShippingUpgrades",
"createListingShippingUpgrade",
"updateListingShippingUpgrade",
"deleteListingShippingUpgrade",
"findAllListingTransactions",
"getListingTranslation",
"createListingTranslation",
"updateListingTranslation",
"deleteListingTranslation",
"getVariationImages",
"updateVariationImages",
"findAllListingActive",
"getInterestingListings",
"getTrendingListings",
];

describe('EtsyApi.Listings methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = Listings
