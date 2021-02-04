
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"getShippingCosts",
"getShippingInfo",
"updateShippingInfo",
"deleteShippingInfo",
"getPostageRates",
"createShippingTemplate",
"getShippingTemplate",
"updateShippingTemplate",
"deleteShippingTemplate",
"findAllShippingTemplateEntries",
"findAllShippingTemplateUpgrades",
"createShippingTemplateUpgrade",
"updateShippingTemplateUpgrade",
"deleteShippingTemplateUpgrade",
"createShippingTemplateEntry",
"getShippingTemplateEntry",
"updateShippingTemplateEntry",
"deleteShippingTemplateEntry",
];

describe('EtsyApi.Shipping methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = Shipping
