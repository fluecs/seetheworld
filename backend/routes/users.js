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
router.get('/register', async (req, res) => {
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
router.get('/login', async (req, res) => {
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

module.exports = router;