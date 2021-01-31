
const utils = require("./utils.js");
function ImageTypes(client){
    this.client = client
}
/*
Lists available image types along with their supported sizes.
*/
ImageTypes.prototype.listImageTypes = function(params,cb){
    let path = utils.uriParams("/image_types",params,);
    this.client.get(path,params,cb);
}

module.exports = ImageTypes
