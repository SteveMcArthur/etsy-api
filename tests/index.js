
const assert = require("chai").assert
const EtsyAPI = require("../index.js")("dummykey");
const Root = require('./classes/Root.js');
const Baseline = require('./classes/Baseline.js');
const Countries = require('./classes/Countries.js');
const FeaturedTreasuries = require('./classes/FeaturedTreasuries.js');
const Guests = require('./classes/Guests.js');
const ImageTypes = require('./classes/ImageTypes.js');
const Listings = require('./classes/Listings.js');
const PagesSignup = require('./classes/PagesSignup.js');
const Pages = require('./classes/Pages.js');
const Payments = require('./classes/Payments.js');
const PrivateBaseline = require('./classes/PrivateBaseline.js');
const PropertyOptions = require('./classes/PropertyOptions.js');
const PropertySets = require('./classes/PropertySets.js');
const Receipts = require('./classes/Receipts.js');
const Regions = require('./classes/Regions.js');
const Server = require('./classes/Server.js');
const Shipping = require('./classes/Shipping.js');
const Shops = require('./classes/Shops.js');
const Taxonomy = require('./classes/Taxonomy.js');
const Teams = require('./classes/Teams.js');
const Transactions = require('./classes/Transactions.js');
const Treasuries = require('./classes/Treasuries.js');
const Types = require('./classes/Types.js');
const Users = require('./classes/Users.js');


let clientObjects = [
        "root",
        "baseline",
        "countries",
        "featuredTreasuries",
        "guests",
        "imageTypes",
        "listings",
        "pagesSignup",
        "pages",
        "payments",
        "privateBaseline",
        "propertyOptions",
        "propertySets",
        "receipts",
        "regions",
        "server",
        "shipping",
        "shops",
        "taxonomy",
        "teams",
        "transactions",
        "treasuries",
        "types",
        "users",
];

let clientMethods = [
    "get", "post","put"
];

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
