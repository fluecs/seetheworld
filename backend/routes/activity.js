const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// GET /api/activity/:id/places
router.get('/:id/places', (req, res) => {
  const activityId = parseInt(req.params.id, 10);
  const placesPath = path.join(__dirname, '../data/places.json');
  fs.readFile(placesPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read places data' });
    let places = JSON.parse(data);
    const filtered = places.filter(place => place.activities && place.activities.includes(activityId));
    res.json(filtered);
  });
});

module.exports = router;
