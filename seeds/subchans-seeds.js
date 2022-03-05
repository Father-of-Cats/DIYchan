const { Subchans } = require('../models');

const postData = [
  {
    name: 'Antique Restoration',
    user_id: 3,
  },
  {
    name: 'Wood Working',
    user_id: 1,
  },
  {
    name: 'Baking',
    user_id: 2,
  },
  {
    name: 'Knitting',
    user_id: 3,
  },
  {
    name: 'Gardening',
    user_id: 1,
  },
  {
    name: 'Amateur Geology',
    user_id: 2,
  },
  {
    name: 'Beekeeping',
    user_id: 1,
  },
  {
    name: 'Computer Building',
    user_id: 2,
  },
  {
    name: 'Reading Stuff Hunter Typed',
    user_id: 3,
  },
  {
    name: 'Sewing/Tailoring',
    user_id: 3,
  },
  {
    name: 'Farming',
    user_id: 2,
  },
  {
    name: 'Glassmaking',
    user_id: 3,
  },
  {
    name: 'Web Development',
    user_id: 2,
  },
  {
    name: 'Stress Eating',
    user_id: 3,
  },
  {
    name: 'Dissociation',
    user_id: 1,
  },
];

const seedCategories = () => Subchans.bulkCreate(postData);

module.exports = seedCategories;