const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const placesPath = path.join(__dirname, '../data/places.json');
const usersPath = path.join(__dirname, '../data/users.json');
const JWT_SECRET = 'gdr643mn4tgnfidbji';

// helper functions
function loadUsers() {
  try {
    return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  } catch (err) {
    console.error('Error reading users.json:', err.message);
    return [];
  }
}

function saveUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}

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

// 📅 Book a place
router.post('/book', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ msg: 'No token provided' });

  const token = authHeader.split(' ')[1];
  let decoded;
  
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(403).json({ msg: 'Invalid or expired token' });
  }

  const { id, people, startDate, suite } = req.body;

  // Validate required fields
  if (!id || !people || !startDate || !suite) {
    return res.status(400).json({ msg: 'Missing required fields: id, people, startDate, suite' });
  }

  // Validate data types
  if (typeof people !== 'number' || people <= 0) {
    return res.status(400).json({ msg: 'People must be a positive number' });
  }

  if (typeof startDate !== 'string' || !Date.parse(startDate)) {
    return res.status(400).json({ msg: 'startDate must be a valid date string' });
  }

  const users = loadUsers();
  const userIndex = users.findIndex(u => u.id === decoded.id);

  if (userIndex === -1) {
    return res.status(404).json({ msg: 'User not found' });
  }

  // Create booking object
  const booking = {
    id: parseInt(id),
    people,
    startDate,
    suite,
    bookedAt: new Date().toISOString()
  };

  // Add booking to user's booked array
  users[userIndex].booked.push(booking);
  saveUsers(users);

  res.status(201).json({ 
    msg: 'Booking successful', 
    booking 
  });
});

module.exports = router;