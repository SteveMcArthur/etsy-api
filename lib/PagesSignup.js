
const utils = required("./Utils.js");
function PagesSignup(client){
    this.client = client
}
PagesSignup.prototype.pagesSignup = function(params,cb){
    let path = utils.uriParams("/pages-signup",params,);
    this.client.post(path,params,cb);
}

module.exports = PagesSignup
