const Users = require('./Users');
const Usersettings = require('./Usersettings');
const Usertypes = require('./Usertypes');
const Subchans = require('./Subchans');
const Comments = require('./Comments');
const Posts = require('./Posts');
const Highlights = require('./Highlights');

Users.belongsToMany(Usertypes, {
  through: 'id',
});

// Users.belongsToMany(Subchans, {
//   through: 'id',
// });

Users.hasMany(Comments);

Posts.belongsToMany(Subchans, {
  through: 'sub_id',
});

Posts.belongsTo(Users);

Comments.belongsToMany(Posts, {
  through: 'post_id',
});

Comments.belongsTo(Users);

Subchans.belongsTo(Users);

// Highlights.hasMany(Subchans);

module.exports = {
  Users,
  Usertypes,
  Usersettings,
  Comments,
  Posts,
  Subchans,
  Highlights,
};