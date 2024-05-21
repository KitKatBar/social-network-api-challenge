// Import Express.js Router
const router = require('express').Router();
// Import api routes folder
const apiRoutes = require('./api');

// Middleware to send all the requests that begin with /api to the routes in the routes folder
router.use('/api', apiRoutes);

// Display wrong route if the URL path matches none of the routes
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
