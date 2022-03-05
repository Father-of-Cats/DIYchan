const { Posts } = require('../models');

const postData = [
  {
    post_subject: 'Found a chest by the beach and decided to restore it.',
    post_data: 'I found an old weather chest with some gold inside it. When I removed the gold, food turned to ash in my mouth. I restored the chest, though, and I hope you like it!',
    user_id: 3,
    subchan_id: 1,
  },
];

const seedCategories = () => Posts.bulkCreate(postData);

module.exports = seedCategories;
