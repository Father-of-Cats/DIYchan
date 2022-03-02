const Users = require('./Users');
const Usersettings = require('./Usersettings');
const Usertypes = require('./Usertypes');
const Subchans = require('./Subchans');
const Comments = require('./Comments');
const Posts = require('./Posts');
const Highlights = require('./Highlights');

Users.hasMany(Usertypes);

// Users.belongsToMany(Subchans, {
//   through: id,
// });

// Users.belongsToMany(Posts, {
//   through: id,
// });

// Users.belongsToMany(Comments, {
//   through: id,
// });

Posts.belongsToMany(Subchans, {
  through: user_id,
});

Posts.belongsTo(Users);

// Comments.belongsToMany(Posts, {
//   through: id,
// });

Comments.belongsTo(Users);

Subchans.belongsTo(Users);

Highlights.hasMany(Subchans);

module.exports = {
  Users,
  Usertypes,
  Usersettings,
  Comments,
  Posts,
  Subchans,
  Highlights,
};