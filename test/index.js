const assert = require('assert');
const EtsyAPI = require("../index.js")("dummykey");
let clientObjects = [
    "root", "baseline", "countries", "featuredTreasuries", "guests", "imageTypes", "listings",
    "pagesSignup", "pages", "payments", "privateBaseline", "propertyOptions", "propertySets",
    "receipts", "regions", "server", "shipping", "shops", "taxonomy", "teams", "transactions",
    "treasuries", "types", "users"
];
describe('EtsyApi object properties Exist', function () {

    clientObjects.forEach(item => {
        it("Has "+item+" object", function () {
            assert.ok(EtsyAPI.hasOwnProperty(item), item+" object exists");
        });
    });

});
