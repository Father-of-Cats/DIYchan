const router = require("express").Router();
const { Subchans, Users } = require("../models");

// get all subs for homepage
router.get("/", (req, res) => {
    res.render("homepage");
    // Subchans.findAll({
    //     include: [Users],
    // })
    //     .then((dbPostData) => {
    //         const subs = dbPostData.map((id) => id.get({ plain: true }));

    //         res.render("login", { subs });
    //     })
    //     .catch((err) => {
    //         res.status(500).json(err);
    //     });
});

router.get("/login", (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect("/");
    //     return;
    // }

    res.render("login");
});

router.get("/posts", (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect("/");
    //     return;
    // }

    res.render("posts");
});

module.exports = router;