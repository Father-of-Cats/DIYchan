const { Comments } = require('../models');

const commentData = [
  {
    user_id: 2,
    post_id: 1,
    comment_data: 'Hey, this is a really interesting post. I am glad I found it. Neat!',
  },
];

const seedCategories = () => Comments.bulkCreate(commentData);

module.exports = seedCategories;
