const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let clientObjects = [
    "root", "baseline", "countries", "featuredTreasuries", "guests", "imageTypes", "listings",
    "pagesSignup", "pages", "payments", "privateBaseline", "propertyOptions", "propertySets",
    "receipts", "regions", "server", "shipping", "shops", "taxonomy", "teams", "transactions",
    "treasuries", "types", "users"
];
let clientMethods = [
    "get", "post","put"
]
describe('EtsyApi object properties Exist', function () {

    clientObjects.forEach(item => {
        it("Has "+item+" object", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "object");
        });
    });

});

describe('EtsyApi method properties Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});

