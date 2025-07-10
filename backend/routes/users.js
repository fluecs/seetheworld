const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const usersPath = path.join(__dirname, '../data/users.json');
const JWT_SECRET = 'gdr643mn4tgnfidbji';

// helper
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

// 📝 Register
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ msg: 'Missing required fields' });
  }

  const users = loadUsers();

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ msg: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
    email,
    role: 'user',
    booked: [],
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  res.status(201).json({ msg: 'User registered' });
});

// 🔐 Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ msg: 'Missing credentials' });
  }

  const users = loadUsers();
  const user = users.find(u => u.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ msg: 'Invalid username or password' });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

// 🔒 Profile (example of protected route)
router.get('/profile', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ msg: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ msg: 'Profile data', user: decoded });
  } catch (err) {
    res.status(403).json({ msg: 'Invalid or expired token' });
  }
});

// 📋 Get user's booked places
router.get('/bookings', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ msg: 'No token provided' });

  const token = authHeader.split(' ')[1];
  let decoded;
  
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(403).json({ msg: 'Invalid or expired token' });
  }

  const users = loadUsers();
  const user = users.find(u => u.id === decoded.id);

  if (!user) {
    return res.status(404).json({ msg: 'User not found' });
  }

  // Load places data to get place details
  const placesPath = path.join(__dirname, '../data/places.json');
  let placesData = [];
  
  try {
    const rawData = fs.readFileSync(placesPath);
    placesData = JSON.parse(rawData);
  } catch (err) {
    console.error('Error reading places.json:', err.message);
    return res.status(500).json({ error: 'Could not load places data' });
  }

  // Enhance booking data with place details
  const enhancedBookings = user.booked.map(booking => {
    const place = placesData.find(p => p.id === String(booking.id));
    return {
      ...booking,
      place: place ? {
        id: place.id,
        title: place.title,
        imageURL: place.imageURL,
        description: place.description,
        rating: place.rating,
        pricePerPerson: place.pricePerPerson,
		days: place.days
      } : null
    };
  });

  res.json({
    msg: 'User bookings retrieved successfully',
    bookings: enhancedBookings,
    count: enhancedBookings.length
  });
});

module.exports = router;