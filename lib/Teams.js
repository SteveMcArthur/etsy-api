
const utils = required("./Utils.js");
function Teams(client){
    this.client = client
}
Teams.prototype.findAllTeams = function(params,cb){
    let path = utils.uriParams("/teams",params,);
    this.client.get(path,params,cb);
}

Teams.prototype.findAllUsersForTeam = function(params,cb){
    let path = utils.uriParams("/teams/:team_id/users/",params,["team_id"]);
    this.client.get(path,params,cb);
}

Teams.prototype.findTeams = function(params,cb){
    let path = utils.uriParams("/teams/:team_ids/",params,["team_ids"]);
    this.client.get(path,params,cb);
}

module.exports = Teams
