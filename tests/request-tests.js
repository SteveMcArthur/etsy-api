require('dotenv').config();
const path = require("path");
const sinon = require("sinon");
const fs = require("fs-extra");
const apikey = process.env.ETSY_APIKEY;
console.log(apikey);
config = {
    key:apikey,
    secret: process.env.ETSY_SECRET,
    authToken: process.env.ETSY_TOKEN,
    authSecret: process.env.ETSY_TOKENSECRET,
}
const EtsyAPI = (require(path.join(__dirname,"../index.js")))(config);

//const shop_id = 22961251; //DenPerfectUK
const shop_id = process.env.ETSY_SHOPID;
//EtsyAPI.shops.findAllShopListingsActive = sinon.stub().yields(null,null,'{"count": 37}')

//get request
/* EtsyAPI.shops.findAllShopListingsActive({shop_id: shop_id, limit: 120},function (err, status, body) {
    if (err) {
        console.log(err);
        return;
    }
    let obj = JSON.parse(body);
    console.log("Number records returned = "+obj.count);
    fs.writeJSONSync("shop-listings.json",obj)
}); */
/* EtsyAPI.shops.getShop({shop_id: shop_id},function (err, status, body) {
    if (err) {
        console.log(err);
        return;
    }
    let obj = JSON.parse(body);
    console.log("Shop returned");
    fs.writeJSONSync("shop.json",obj)
}); */

EtsyAPI.shops.updateShop({shop_id: shop_id,title:"My Greeting Cards, Mugs and Posters"},function (err, status, body) {
    if (err) {
        console.log(err);
        return;
    }
    let obj = JSON.parse(body);
    console.log("updateShop returned");
    fs.writeJSONSync("updateShop.json",obj);
});


