const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const activitiesPath = path.join(__dirname, '../data/activities.json');

// 📝 GET /activities/list
router.get('/list', (req, res) => {
  let activitiesData = [];

  try {
    const rawData = fs.readFileSync(activitiesPath, 'utf-8');
    activitiesData = JSON.parse(rawData);
  } catch (err) {
    console.error('Error reading or parsing activities.json:', err.message);
    return res.status(500).json({ error: 'Could not load data' });
  }

  let filtered = [...activitiesData];
  const { search, top } = req.query;

  // 🔍 Search by name
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      activity => activity.name.toLowerCase().includes(searchLower)
    );
  }

  // 🏆 Filter top activities
  if ('top' in req.query) {
    filtered = filtered.filter(activity => activity.top === true);
  }

  res.json({
    count: filtered.length,
    data: filtered
  });
});

// 📝 GET /activities/:id
router.get('/:id', (req, res) => {
  let activitiesData = [];

  try {
    const rawData = fs.readFileSync(activitiesPath, 'utf-8');
    activitiesData = JSON.parse(rawData);
  } catch (err) {
    console.error('Error reading or parsing activities.json:', err.message);
    return res.status(500).json({ error: 'Could not load data' });
  }

  const activityId = req.params.id;
  const activity = activitiesData.find(a => String(a.id) === activityId);

  if (!activity) {
    return res.status(404).json({ error: 'Activity not found' });
  }

  res.json(activity);
});

module.exports = router;
