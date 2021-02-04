
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"findAllUsers",
"getUser",
"findAllUserAddresses",
"createUserAddress",
"getUserAddress",
"deleteUserAddress",
"uploadAvatar",
"getAvatarImgSrc",
"getUserBillingOverview",
"getAllUserCarts",
"addToCart",
"updateCartListingQuantity",
"removeCartListing",
"getUserCart",
"updateCart",
"deleteCart",
"addAndSelectShippingForApplePay",
"findAllCartListings",
"saveListingForLater",
"getUserCartForShop",
"createSingleListingCart",
"findAllUserCharges",
"getUserChargesMetadata",
"getCirclesContainingUser",
"getConnectedUser",
"unconnectUsers",
"listFollowingPages",
"followPage",
"unfollowPage",
"getConnectedUsers",
"connectUsers",
"findAllUserFavoredBy",
"findAllUserFavoriteListings",
"findUserFavoriteListings",
"createUserFavoriteListings",
"deleteUserFavoriteListings",
"findAllUserFavoriteUsers",
"findUserFavoriteUsers",
"createUserFavoriteUsers",
"deleteUserFavoriteUsers",
"findAllUserFeedbackAsAuthor",
"findAllUserFeedbackAsBuyer",
"findAllUserFeedbackAsSeller",
"findAllUserFeedbackAsSubject",
"findAllFeedbackFromBuyers",
"findAllFeedbackFromSellers",
"findAllUserPayments",
"findAllUserPaymentTemplates",
"findUserProfile",
"updateUserProfile",
"findAllUserBuyerReceipts",
"findAllUserShippingProfiles",
"findAllUserShops",
"findAllTeamsForUser",
"findAllUserBuyerTransactions",
"findAllUserTreasuries",
];

describe('EtsyApi.Users methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = Users
