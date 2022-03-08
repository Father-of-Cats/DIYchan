const seedUsertypes = require('./usertype-seeds');
const seedUsers = require('./users-seeds');
const seedSubchans = require('./subchans-seeds');
const seedPosts = require('./posts-seeds');
const seedComments = require('./comments-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsertypes();
  console.log('\n----- USERTYPES SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedSubchans();
  console.log('\n----- SUBCHANS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
