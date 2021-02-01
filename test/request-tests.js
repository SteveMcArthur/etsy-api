require('dotenv').config();
const path = require("path");
const sinon = require("sinon");
const apikey = process.env.ETSY_APIKEY;
console.log(apikey)
const EtsyAPI = (require(path.join(__dirname,"../index.js")))({key:apikey});

const shop_id = 22961251; //DenPerfectUK
EtsyAPI.shops.findAllShopListingsActive = sinon.stub().yields(null,null,'{"count": 37}')


EtsyAPI.shops.findAllShopListingsActive({shop_id: shop_id, limit: 120},function (err, status, body) {
    if (err) {
        console.log(err);
        return;
    }
    let obj = JSON.parse(body);
    console.log("Number records returned = "+obj.count);
});


