// routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const Data = require('../models/dataModel');

// Endpoint to fetch data based on end year
router.get('/data/year/:year', async (req, res) => {
    try {
        const data = await Data.find({ Year: req.params.year });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add more endpoints for other filters (topics, sector, region, etc.)

module.exports = router;
