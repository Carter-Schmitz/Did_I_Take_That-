const router = require('express').Router();
const userRoutes = require('./userRoutes');
const medRoutes = require('./medRoutes');

router.use('/users', userRoutes);
router.use('/meds', medRoutes);

module.exports = router;