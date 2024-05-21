// Import Express.js Router
const router = require('express').Router();
// Import our modular router
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Define the route to our models
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
