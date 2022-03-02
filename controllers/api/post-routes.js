const router = require('express').Router();
const Post  = require('../../models/Posts');

router.get('/post/:id', (req, res) => {
    const post = {
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      comments: [{}, {}],
      user_id: {
        users: 'test_user'
      }
    };
  
    res.render('single-post', { post });
  });

module.exports = router;