const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const placesPath = path.join(__dirname, '../data/places.json');

router.get('/list', (req, res) => {
  let placesData = [];

  try {
    const rawData = fs.readFileSync(placesPath);
    placesData = JSON.parse(rawData);
  } catch (err) {
    console.error('Error reading or parsing places.json:', err.message);
    return res.status(500).json({ error: 'Could not load data' });
  }

  let filtered = [...placesData];
  const { search, top } = req.query;

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      place =>
        place.title.toLowerCase().includes(searchLower) ||
        place.description.toLowerCase().includes(searchLower)
    );
  }

  if ('top' in req.query) {
    filtered = filtered.filter(place => place.top === true);
  }

  res.json({
    count: filtered.length,
    data: filtered
  });
});

router.get('/place/:id', (req, res) => {
  let placesData = [];
  let activitiesData = [];

  try {
    const rawData = fs.readFileSync(placesPath);
    placesData = JSON.parse(rawData);
  } catch (err) {
    console.error('Error reading or parsing places.json:', err.message);
    return res.status(500).json({ error: 'Could not load data' });
  }

  // Read activities.json
  const activitiesPath = path.join(__dirname, '../data/activities.json');
  try {
    const activitiesRaw = fs.readFileSync(activitiesPath);
    activitiesData = JSON.parse(activitiesRaw);
  } catch (err) {
    console.error('Error reading or parsing activities.json:', err.message);
    return res.status(500).json({ error: 'Could not load activities data' });
  }

  const placeId = req.params["id"];
  const place = placesData.find(p => String(p.id) === placeId);

  if (!place) {
    return res.status(404).json({ error: 'Place not found' });
  }

  // Transform activity IDs to names
  if (Array.isArray(place.activities)) {
    place.activities = place.activities.map(id => {
      const activity = activitiesData.find(a => a.id === id);
      return activity ? activity.name : id;
    });
  }

  res.json(place);
});

module.exports = router;