const { Usertypes } = require('../models');

const usertypeData = [
  {
    type: 'admin',
  },
  {
    type: 'moderator',
  },
  {
    type: 'user',
  },
];

const seedCategories = () => Category.bulkCreate(usertypeData);

module.exports = seedCategories;
