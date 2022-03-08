const router = require("express").Router();
const { Subchans, Users, Posts, Comments } = require("../models");

// get all subchans for homepage
router.get("/", (req, res) => {
    Subchans.findAll()
        .then((dbPostData) => {
            const sub_name = dbPostData.map((Subchans) => Subchans.get({ plain: true }));

            res.render("homepage", { sub_name });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// get subchans
router.get("/subchans", (req, res) => {
    Subchans.findAll({
        include: [Posts],
    })
        .then((dbPostData) => {
            const sub_name = dbPostData.map((Subchans) => Subchans.get({ plain: true }));

            res.render("homepage", { sub_name });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// get subchan by id
router.get("/subchans/:id", (req, res) => {
    Subchans.findByPk(req.params.id, {
        include: [Posts],
    })
        .then((dbPostData) => {
            const subs = dbPostData.get({ plain: true });

            res.render("subchans", { subs });
        })
        .catch((err) => {
            res.status(404).json(err);
        });
});

// get post by id
router.get("/posts/:id", (req, res) => {
    Posts.findByPk(req.params.id, {
        include: [Users],
        include: [Comments],
    })
        .then((dbPostData) => {
            const posts = dbPostData.get({ plain: true });

            res.render("posts", { posts });
        })
        .catch((err) => {
            res.status(404).json(err);
        });
});

module.exports = router;