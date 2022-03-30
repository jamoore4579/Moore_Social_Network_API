const router = require('express').Router();

// all API routes from /api/index.js will be imported
const apiRoutes = require('./api');

// adds prefix '/api' to all api routes that are imported from api directory
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> 404 Error </h1>');
});

module.exports = router;