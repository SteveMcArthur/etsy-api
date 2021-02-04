
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"findPage",
"updatePageData",
"uploadAvatar",
"findAllPageCollections",
"createPageCollection",
"getPageCollection",
"updatePageCollection",
"deletePageCollection",
"getCollectionListings",
"addListingToCollection",
"removeListingFromCollection",
"findPageCollectionsForListings",
"addCurator",
"removeCurator",
"curatorPeopleSearch",
];

describe('EtsyApi.Pages methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = Pages
