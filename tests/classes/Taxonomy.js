
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"getBuyerTaxonomy",
"getTaxonomyNodeProperties",
"getSellerTaxonomy",
"getSellerTaxonomyVersion",
"findSuggestedStyles",
];

describe('EtsyApi.Taxonomy methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = Taxonomy
