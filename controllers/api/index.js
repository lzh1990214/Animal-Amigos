const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
const walletRoutes = require('./walletRoutes');
const uploadRoutes = require('./uploadRoutes');

router.use('/user', userRoutes);
router.use('/services', serviceRoutes);
router.use('/wallet', walletRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;
