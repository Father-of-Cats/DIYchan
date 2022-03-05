const Users = require('./Users');
const Usersettings = require('./Usersettings');
const Usertypes = require('./Usertypes');
const Subchans = require('./Subchans');
const Comments = require('./Comments');
const Posts = require('./Posts');
const Highlights = require('./Highlights');

Users.hasOne(Usertypes);

Users.hasMany(Subchans);

Users.hasMany(Posts);

Users.hasMany(Comments);

Posts.hasMany(Comments);

Subchans.hasMany(Posts);

// Subchans.belongsTo(Highlights);

module.exports = {
  Users,
  Usertypes,
  Usersettings,
  Comments,
  Posts,
  Subchans,
  Highlights,
};