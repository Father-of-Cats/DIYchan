const Users = require('./Users');
const Usersettings = require('./Usersettings');
const Usertypes = require('./Usertypes');
const Subchans = require('./Subchans');
const Comments = require('./Comments');
const Posts = require('./Posts');
const Highlights = require('./Highlights');

Users.hasMany(Subchans, {
    foreignKey: 'owner_id',
});

Users.hasMany(Posts, {
    foreignKey: 'user_id',
});

Users.hasMany(Comments, {
    foreignKey: 'user_id',
});

Posts.belongsTo(Subchans, {
    foreignKey: 'id',
});

Comments.belongsTo(Posts, {
    foreignKey: 'id',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

Category.hasMany(Product,{
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: ProductTag
});

Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: ProductTag
});

module.exports = {
  Users,
  Usertypes,
  Usersettings,
  Comments,
  Posts,
  Subchans,
  Highlights,
};