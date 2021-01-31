
const utils = required("./Utils.js");
function Shipping(client){
    this.client = client
}
Shipping.prototype.getShippingCosts = function(params,cb){
    let path = utils.uriParams("/shipping/:shipping_provider_id/postage-costs",params,["shipping_provider_id"]);
    this.client.post(path,params,cb);
}

Shipping.prototype.getShippingInfo = function(params,cb){
    let path = utils.uriParams("/shipping/info/:shipping_info_id",params,["shipping_info_id"]);
    this.client.get(path,params,cb);
}

Shipping.prototype.updateShippingInfo = function(params,cb){
    let path = utils.uriParams("/shipping/info/:shipping_info_id",params,["shipping_info_id"]);
    this.client.put(path,params,cb);
}

Shipping.prototype.deleteShippingInfo = function(params,cb){
    let path = utils.uriParams("/shipping/info/:shipping_info_id",params,["shipping_info_id"]);
    this.client.delete(path,params,cb);
}

Shipping.prototype.getPostageRates = function(params,cb){
    let path = utils.uriParams("/shipping/providers/:shipping_provider_id/mail-class-rates",params,["shipping_provider_id"]);
    this.client.post(path,params,cb);
}

Shipping.prototype.createShippingTemplate = function(params,cb){
    let path = utils.uriParams("/shipping/templates",params,);
    this.client.post(path,params,cb);
}

Shipping.prototype.getShippingTemplate = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id",params,["shipping_template_id"]);
    this.client.get(path,params,cb);
}

Shipping.prototype.updateShippingTemplate = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id",params,["shipping_template_id"]);
    this.client.put(path,params,cb);
}

Shipping.prototype.deleteShippingTemplate = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id",params,["shipping_template_id"]);
    this.client.delete(path,params,cb);
}

Shipping.prototype.findAllShippingTemplateEntries = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/entries",params,["shipping_template_id"]);
    this.client.get(path,params,cb);
}

Shipping.prototype.findAllShippingTemplateUpgrades = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/upgrades",params,["shipping_template_id"]);
    this.client.get(path,params,cb);
}

Shipping.prototype.createShippingTemplateUpgrade = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/upgrades",params,["shipping_template_id"]);
    this.client.post(path,params,cb);
}

Shipping.prototype.updateShippingTemplateUpgrade = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/upgrades",params,["shipping_template_id"]);
    this.client.put(path,params,cb);
}

Shipping.prototype.deleteShippingTemplateUpgrade = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/upgrades",params,["shipping_template_id"]);
    this.client.delete(path,params,cb);
}

Shipping.prototype.createShippingTemplateEntry = function(params,cb){
    let path = utils.uriParams("/shipping/templates/entries",params,);
    this.client.post(path,params,cb);
}

Shipping.prototype.getShippingTemplateEntry = function(params,cb){
    let path = utils.uriParams("/shipping/templates/entries/:shipping_template_entry_id",params,["shipping_template_entry_id"]);
    this.client.get(path,params,cb);
}

Shipping.prototype.updateShippingTemplateEntry = function(params,cb){
    let path = utils.uriParams("/shipping/templates/entries/:shipping_template_entry_id",params,["shipping_template_entry_id"]);
    this.client.put(path,params,cb);
}

Shipping.prototype.deleteShippingTemplateEntry = function(params,cb){
    let path = utils.uriParams("/shipping/templates/entries/:shipping_template_entry_id",params,["shipping_template_entry_id"]);
    this.client.delete(path,params,cb);
}

module.exports = Shipping
