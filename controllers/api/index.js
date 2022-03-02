const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentsRoutes = require('./comments-routes');
const highlightsRoutes = require('./highlights-routes');
const postRoutesRoutes = require('./post-routes');
const subchansRoutesRoutes = require('./subchans-routes');
const userRoutesRoutes = require('./user-routes');
const userSettingsRoutes = require('./user-settings');
const userTypeRotues = require('./user-types-routes');

router.use('/comments', commentsRoutes);
router.use('/users', userRoutes);
router.use('/hightlights', highlightsRoutes);
router.use('/post-routes', postRoutesRoutes);
router.use('/subchans-routes', subchansRoutesRoutes);
router.use('/user-routes', userRoutesRoutes);
router.use('/user-settings', userSettingsRoutes);
router.use('/user-types-routes', userTypeRotues)




module.exports = router;