
const utils = require("./utils.js");
function PagesSignup(client){
    this.client = client
}
/*
Sign up for Pages
*/
PagesSignup.prototype.pagesSignup = function(params,cb){
    let path = utils.uriParams("/pages-signup",params,);
    this.client.post(path,params,cb);
}

module.exports = PagesSignup
