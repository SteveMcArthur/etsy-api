
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"describeOccasionEnum",
"describeRecipientEnum",
"describeWhenMadeEnum",
"describeWhoMadeEnum",
];

describe('EtsyApi.Types methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = Types
