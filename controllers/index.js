const router = require('express').Router();

const apiRoutes = require('./api');
const defaultRoute = require('./html-routes');

router.use('/api', apiRoutes);
router.use('/', defaultRoute);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;