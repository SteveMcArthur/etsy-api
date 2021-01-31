
const utils = require("./utils.js");
function Shipping(client){
    this.client = client
}
/*
Returns postage costs for the shipping carrier based on the supplied package
*/
Shipping.prototype.getShippingCosts = function(params,cb){
    let path = utils.uriParams("/shipping/:shipping_provider_id/postage-costs",params,["shipping_provider_id"]);
    this.client.post(path,params,cb);
}

/*
Retrieves a ShippingInfo by id.
*/
Shipping.prototype.getShippingInfo = function(params,cb){
    let path = utils.uriParams("/shipping/info/:shipping_info_id",params,["shipping_info_id"]);
    this.client.get(path,params,cb);
}

/*
Updates a ShippingInfo with the given id.
*/
Shipping.prototype.updateShippingInfo = function(params,cb){
    let path = utils.uriParams("/shipping/info/:shipping_info_id",params,["shipping_info_id"]);
    this.client.put(path,params,cb);
}

/*
Deletes the ShippingInfo with the given id.
*/
Shipping.prototype.deleteShippingInfo = function(params,cb){
    let path = utils.uriParams("/shipping/info/:shipping_info_id",params,["shipping_info_id"]);
    this.client.delete(path,params,cb);
}

/*
Returns postage costs for all mail classes for a shipping carrier based on the supplied package
*/
Shipping.prototype.getPostageRates = function(params,cb){
    let path = utils.uriParams("/shipping/providers/:shipping_provider_id/mail-class-rates",params,["shipping_provider_id"]);
    this.client.post(path,params,cb);
}

/*
Creates a new ShippingTemplate
*/
Shipping.prototype.createShippingTemplate = function(params,cb){
    let path = utils.uriParams("/shipping/templates",params,);
    this.client.post(path,params,cb);
}

/*
Retrieves a ShippingTemplate by id.
*/
Shipping.prototype.getShippingTemplate = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id",params,["shipping_template_id"]);
    this.client.get(path,params,cb);
}

/*
Updates a ShippingTemplate
*/
Shipping.prototype.updateShippingTemplate = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id",params,["shipping_template_id"]);
    this.client.put(path,params,cb);
}

/*
Deletes the ShippingTemplate with the given id.
*/
Shipping.prototype.deleteShippingTemplate = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id",params,["shipping_template_id"]);
    this.client.delete(path,params,cb);
}

/*
Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
*/
Shipping.prototype.findAllShippingTemplateEntries = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/entries",params,["shipping_template_id"]);
    this.client.get(path,params,cb);
}

/*
Retrieves a list of shipping upgrades for the parent ShippingTemplate
*/
Shipping.prototype.findAllShippingTemplateUpgrades = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/upgrades",params,["shipping_template_id"]);
    this.client.get(path,params,cb);
}

/*
Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
*/
Shipping.prototype.createShippingTemplateUpgrade = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/upgrades",params,["shipping_template_id"]);
    this.client.post(path,params,cb);
}

/*
Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
*/
Shipping.prototype.updateShippingTemplateUpgrade = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/upgrades",params,["shipping_template_id"]);
    this.client.put(path,params,cb);
}

/*
Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
*/
Shipping.prototype.deleteShippingTemplateUpgrade = function(params,cb){
    let path = utils.uriParams("/shipping/templates/:shipping_template_id/upgrades",params,["shipping_template_id"]);
    this.client.delete(path,params,cb);
}

/*
Creates a new ShippingTemplateEntry
*/
Shipping.prototype.createShippingTemplateEntry = function(params,cb){
    let path = utils.uriParams("/shipping/templates/entries",params,);
    this.client.post(path,params,cb);
}

/*
Retrieves a ShippingTemplateEntry by id.
*/
Shipping.prototype.getShippingTemplateEntry = function(params,cb){
    let path = utils.uriParams("/shipping/templates/entries/:shipping_template_entry_id",params,["shipping_template_entry_id"]);
    this.client.get(path,params,cb);
}

/*
Updates a ShippingTemplateEntry
*/
Shipping.prototype.updateShippingTemplateEntry = function(params,cb){
    let path = utils.uriParams("/shipping/templates/entries/:shipping_template_entry_id",params,["shipping_template_entry_id"]);
    this.client.put(path,params,cb);
}

/*
Deletes the ShippingTemplateEntry
*/
Shipping.prototype.deleteShippingTemplateEntry = function(params,cb){
    let path = utils.uriParams("/shipping/templates/entries/:shipping_template_entry_id",params,["shipping_template_entry_id"]);
    this.client.delete(path,params,cb);
}

module.exports = Shipping
