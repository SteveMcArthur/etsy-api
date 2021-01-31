require('dotenv').config();
const path = require("path");
const apikey = process.env.ETSY_APIKEY;
console.log(apikey)
const EtsyAPI = (require(path.join(__dirname,"../index.js")))({key:apikey});

const shop_id = 14223749;

console.log(EtsyAPI)

EtsyAPI.shops.findAllShopListingsActive({shop_id: shop_id, limit: 120},function (err, status, body) {
    if (err) {
        console.log(err);
        return;
    }
    
    console.log(body)
});


