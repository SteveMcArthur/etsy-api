
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"getGuest",
"findAllGuestCarts",
"addToGuestCart",
"updateGuestCartListingQuantity",
"removeGuestCartListing",
"findGuestCart",
"updateGuestCart",
"deleteGuestCart",
"claimGuest",
"mergeGuest",
"generateGuest",
];

describe('EtsyApi.Guests methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = Guests
