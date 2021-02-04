function uriParams(uri,params,reqParams){

    for(var i=0;i<reqParams.length;i++){
        let mustHave = reqParams[i];
        if(params[mustHave]  == undefined){
            throw "Missing required parameter: "+params[reqParams[1]];
        }else {
            uri = uri.replace(":"+mustHave,params[mustHave]);
        }
    }
    return uri;
}

module.exports.uriParams = uriParams;