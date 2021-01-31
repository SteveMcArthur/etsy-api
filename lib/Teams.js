
const utils = require("./utils.js");
function Teams(client){
    this.client = client
}
/*
Returns all Teams
*/
Teams.prototype.findAllTeams = function(params,cb){
    let path = utils.uriParams("/teams",params,);
    this.client.get(path,params,cb);
}

/*
Returns a list of users for a specific team
*/
Teams.prototype.findAllUsersForTeam = function(params,cb){
    let path = utils.uriParams("/teams/:team_id/users/",params,["team_id"]);
    this.client.get(path,params,cb);
}

/*
Returns specified team by ID or team name
*/
Teams.prototype.findTeams = function(params,cb){
    let path = utils.uriParams("/teams/:team_ids/",params,["team_ids"]);
    this.client.get(path,params,cb);
}

module.exports = Teams
