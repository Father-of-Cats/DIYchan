const router = require('express').Router();
const { Posts, Comments } = require('../../models/');

router.post('/', (req, res) => {
    // check the session
    if (req.session) {
      Comments.create({
        comment_data: req.body.comment_data,
        post_id: req.body.post_id,
        // use the id from the session
        user_id: req.session.user_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });

  module.exports = router;