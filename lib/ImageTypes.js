
const utils = required("./Utils.js");
function ImageTypes(client){
    this.client = client
}
ImageTypes.prototype.listImageTypes = function(params,cb){
    let path = utils.uriParams("/image_types",params,);
    this.client.get(path,params,cb);
}

module.exports = ImageTypes
