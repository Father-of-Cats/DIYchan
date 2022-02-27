const Users = require('./Users');
const Usersettings = require('./Usersettings');
const Usertypes = require('./Usertypes');
const Subchans = require('./Subchans');
const Comments = require('./Comments');
const Posts = require('./Posts');
const Highlights = require('./Highlights');

Users.hasMany(Usertypes);

Users.belongsToMany(Subchans, {
  through: sub_id,
});

Users.belongsToMany(Posts, {
  through: user_id,
});

Users.belongsToMany(Comments, {
  through: user_id,
});

Posts.belongsToMany(Subchans, {
  through: sub_id,
});

Posts.belongsTo(Users);

Comments.belongsToMany(Posts, {
  through: post_id,
});

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