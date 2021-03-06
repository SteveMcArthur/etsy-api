
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
let objectMethods = [
"getPrivateBaseline",
];

describe('EtsyApi.PrivateBaseline methods Exist', function () {

    clientMethods.forEach(item => {
        it("Has "+item+" method", function () {          
            assert.exists(EtsyAPI[item]);
            assert.typeOf(EtsyAPI[item], "function");
        });
    });

});


module.exports = PrivateBaseline
