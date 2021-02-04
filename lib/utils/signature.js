const crypto = require('crypto');

function getTimeStamp() {
    return parseInt(new Date().getTime()/1000, 10);
};

function percentEncode(str) {
    return encodeURIComponent(str)
        .replace(/\!/g, "%21")
        .replace(/\*/g, "%2A")
        .replace(/\'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29");
};
function percentEncodeData (data) {
    var result = {};

    for(var key in data) {
        var value = data[key];
        // check if the value is an array
        if (value && Array.isArray(value)){
          var newValue = [];
          // percentEncode every value
          value.forEach((function(val){
            newValue.push(percentEncode(val));
          }).bind(this));
          value = newValue;
        } else {
          value = percentEncode(value);
        }
        result[percentEncode(key)] = value;
    }

    return result;
};
function deParam (string) {
    var arr = string.split('&');
    var data = {};

    for(var i = 0; i < arr.length; i++) {
        var item = arr[i].split('=');

        // '' value
        item[1] = item[1] || '';

        // check if the key already exists
        // this can occur if the QS part of the url contains duplicate keys like this: ?formkey=formvalue1&formkey=formvalue2
        if (data[item[0]]){
          // the key exists already
          if (!Array.isArray(data[item[0]])) {
            // replace the value with an array containing the already present value
            data[item[0]] = [data[item[0]]];
          }
          // and add the new found value to it
          data[item[0]].push(decodeURIComponent(item[1]));
        } else {
          // it doesn't exist, just put the found value in the data object
          data[item[0]] = decodeURIComponent(item[1]);
        }
    }

    return data;
};
function deParamUrl(url) {
    var tmp = url.split('?');

    if (tmp.length === 1)
        return {};

    return deParam(tmp[1]);
};

function getBaseUrl(url) {
    return url.split('?')[0];
};
function sortObject(data) {
    var keys = Object.keys(data);
    var result = [];

    keys.sort();

    for(var i = 0; i < keys.length; i++) {
        var key = keys[i];
        result.push({
            key: key,
            value: data[key],
        });
    }

    return result;
};
function mergeObject(obj1, obj2) {
    obj1 = obj1 || {};
    obj2 = obj2 || {};

    var merged_obj = obj1;
    for(var key in obj2) {
        merged_obj[key] = obj2[key];
    }
    return merged_obj;
};
function getParameterString(request, oauth_data) {
    var base_string_data;
    if (oauth_data.oauth_body_hash) {
        base_string_data = sortObject(percentEncodeData(mergeObject(oauth_data, deParamUrl(request.url))));
    } else {
        base_string_data = sortObject(percentEncodeData(mergeObject(oauth_data, mergeObject(request.data, deParamUrl(request.url)))));
    }

    var data_str = '';

    //base_string_data to string
    for(var i = 0; i < base_string_data.length; i++) {
        var key = base_string_data[i].key;
        var value = base_string_data[i].value;
        // check if the value is an array
        // this means that this key has multiple values
        if (value && Array.isArray(value)){
          // sort the array first
          value.sort();

          var valString = "";
          // serialize all values for this key: e.g. formkey=formvalue1&formkey=formvalue2
          value.forEach((function(item, i){
            valString += key + '=' + item;
            if (i < value.length){
              valString += "&";
            }
          }).bind(this));
          data_str += valString;
        } else {
          data_str += key + '=' + value + '&';
        }
    }

    //remove the last character
    data_str = data_str.substr(0, data_str.length - 1);
    return data_str;
};

function getBaseString(requestParams, oauth_data) {
    return requestParams.method.toUpperCase() + '&' + percentEncode(getBaseUrl(requestParams.url)) + '&' + percentEncode(getParameterString(requestParams, oauth_data));
};

let nonce_length = 11;
function getNonce() {
    var word_characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var result = '';

    for (var i = 0; i < nonce_length; i++) {
        result += word_characters[parseInt(Math.random() * word_characters.length, 10)];
    }

    return result;
};

let consumer_secret = process.env.ETSY_SECRET;
let last_ampersand = true

function getSigningKey(token_secret) {
    token_secret = token_secret || '';

    if (!last_ampersand && !token_secret) {
        return percentEncode(consumer_secret);
    }

    return percentEncode(consumer_secret) + '&' + percentEncode(token_secret);
};

function hash_function(base_string, key) {
    return crypto
        .createHmac('sha1', key)
        .update(base_string)
        .digest('base64')
}

function getSignature(request, token_secret, oauth_data) {
    return hash_function(getBaseString(request, oauth_data), getSigningKey(token_secret));
};

function Signature(client){
    this.client = client;
}

Signature.prototype.getFormData = function(method,url,params){
    let oauth_data = {
        oauth_consumer_key: this.client.apiKey,
        oauth_nonce: getNonce(),
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: getTimeStamp(),
        oauth_version: "1.0",
        oauth_token: this.client.authenticatedToken
     };
     const request_data = {
        url: url,
        method: method,
        data: params
    }
    
    const token_secret = this.client.authenticatedSecret;
    
     //now generate the signature using the request data and the oauth object
     //you've just created above
     let signature = getSignature(request_data,token_secret,oauth_data);
     //now add the signature to the oauth_data paramater object
     oauth_data.oauth_signature = signature;
    
    
     //merge two objects into one
     let formData = Object.assign({},oauth_data,request_data.params);
     return formData;
    
}
module.exports = Signature;