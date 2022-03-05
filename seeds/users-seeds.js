const { Users } = require('../models');

const usersData = [
  {
    username: 'jsalinas',
    type: 1,
    subs: '0',
    email: 'jsalinas@diychan.net',
    pass_hash: 'HashedPassword01!',
  },
  {
    username: 'ereyes',
    type: 1,
    subs: '0',
    email: 'ereyes@diychan.net',
    pass_hash: 'HashedPassword01!',
  },
  {
    username: 'hnelson',
    type: 1,
    subs: '0',
    email: 'hnelson@diychan.net',
    pass_hash: 'HashedPassword01!',
  },
];

const seedCategories = () => Users.bulkCreate(usersData);

module.exports = seedCategories;
