
    const request = require('request');
    const crypto = require('crypto');
    const OAuth = require('oauth-1.0a');
    const util = require('./lib/Utils.js');
    const Root = require('./lib/Root.js');
    const Baseline = require('./lib/Baseline.js');
    const Countries = require('./lib/Countries.js');
    const FeaturedTreasuries = require('./lib/FeaturedTreasuries.js');
    const Guests = require('./lib/Guests.js');
    const ImageTypes = require('./lib/ImageTypes.js');
    const Listings = require('./lib/Listings.js');
    const PagesSignup = require('./lib/PagesSignup.js');
    const Pages = require('./lib/Pages.js');
    const Payments = require('./lib/Payments.js');
    const PrivateBaseline = require('./lib/PrivateBaseline.js');
    const PropertyOptions = require('./lib/PropertyOptions.js');
    const PropertySets = require('./lib/PropertySets.js');
    const Receipts = require('./lib/Receipts.js');
    const Regions = require('./lib/Regions.js');
    const Server = require('./lib/Server.js');
    const Shipping = require('./lib/Shipping.js');
    const Shops = require('./lib/Shops.js');
    const Taxonomy = require('./lib/Taxonomy.js');
    const Teams = require('./lib/Teams.js');
    const Transactions = require('./lib/Transactions.js');
    const Treasuries = require('./lib/Treasuries.js');
    const Types = require('./lib/Types.js');
    const Users = require('./lib/Users.js');


    function hash_function_sha1(base_string, key) {
        return crypto
            .createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
    }

    const baseURL = new URL("https://openapi.etsy.com/");

    function Client(options) {
        this.options = options;
        this.apiKey = this.options.key;
        this.apiSecret = this.options.secret;
        this.callbackURL = this.options.callbackURL;
        this.requestTokenURL = this.options.requestTokenURL ||
            'https://openapi.etsy.com/v2/oauth/request_token?scope=email_r%20profile_r%20profile_w%20address_r%20address_w%20listings_r%20listings_w';
        this.accessTokenURL = this.options.accessTokenURL || 'https://openapi.etsy.com/v2/oauth/access_token'
        this.root = new Root(this);
        this.baseline = new Baseline(this);
        this.countries = new Countries(this);
        this.featuredTreasuries = new FeaturedTreasuries(this);
        this.guests = new Guests(this);
        this.imageTypes = new ImageTypes(this);
        this.listings = new Listings(this);
        this.pagesSignup = new PagesSignup(this);
        this.pages = new Pages(this);
        this.payments = new Payments(this);
        this.privateBaseline = new PrivateBaseline(this);
        this.propertyOptions = new PropertyOptions(this);
        this.propertySets = new PropertySets(this);
        this.receipts = new Receipts(this);
        this.regions = new Regions(this);
        this.server = new Server(this);
        this.shipping = new Shipping(this);
        this.shops = new Shops(this);
        this.taxonomy = new Taxonomy(this);
        this.teams = new Teams(this);
        this.transactions = new Transactions(this);
        this.treasuries = new Treasuries(this);
        this.types = new Types(this);
        this.users = new Users(this);
        this.request = request;

    }

    Client.prototype.auth = function (token, secret) {
        this.authenticatedToken = token;
        this.authenticatedSecret = secret;
        return this;
    };

    Client.prototype.buildUrl = function (path, pageOrQuery) {
        let query;
        if (path == null) {
            path = '/';
        }
        if (pageOrQuery == null) {
            pageOrQuery = null;
        }
        if ((pageOrQuery != null) && typeof pageOrQuery === 'object') {
            query = pageOrQuery;
            if ((this.apiKey != null) && (this.apiSecret == null)) {
                query.api_key = this.apiKey;
            }
        } else {
            query = {};
        }
        if ((this.apiKey != null) && (this.apiSecret == null)) {
            query.api_key = this.apiKey;
        }

        const params = new URLSearchParams(query);
        let _url = baseURL;
        _url.pathname = '/v2' + path;
        _url.search = params.toString();
        console.dir("API URL is " + _url + " ");
        return _url.toString();
    };



    Client.prototype.get = function (path, params, callback) {

        let uri = this.buildUrl(path, params);
        let self = this;
        let reqConfig = {
            uri: uri,
            method: 'GET'
        };
         if ((this.authenticatedToken != null) && (this.authenticatedSecret != null)) {
             //todo
         }

        this.request(reqConfig,function (err, response, body) {
            callback(response, body, callback)
        });
    };

    Client.prototype.putOrPost = function (method, path, params) {

        let url = this.buildUrl(path);
        const oauth = OAuth({
            consumer: {
                key: this.apiKey,
                secret: this.consumerSecret,
            },
            signature_method: 'HMAC-SHA1',
            hash_function: hash_function_sha1
        });

        const request_data = {
            url: url,
            method: method,
            data: params,
        }

        const token = {
            key: this.authenticatedToken,
            secret: this.authenticatedSecret,
        }

        request({
                url: request_data.url,
                method: request_data.method,
                form: oauth.authorize(request_data, token),
            },
            function (err, response, body) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(body);
                }
            }
        )

    }


    Client.prototype.put = function (path, params) {
        let url = this.buildUrl(path);
        this.putOrPost('PUT', path, params);
    }
    Client.prototype.post = function (path, oauth_token, oauth_token_secret, params) {

        this.putOrPost('POST', path, params);
    }

    Client.prototype.requestToken = function (callback) {
        this.etsyOAuth.getOAuthRequestToken(function (err, oauth_token, oauth_token_secret, login_url) {

            if (err) {
                return callback(err);
            }
            auth = {
                token: oauth_token,
                tokenSecret: oauth_token_secret,
                loginUrl: loginUrl
            };
            return callback(null, auth);
        });
    };



    module.exports = function (options) {
        return new Client(options)
    }
