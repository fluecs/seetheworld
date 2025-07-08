const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());               // ← allow all origins by default
app.use(express.json()); // you missed this in what you pasted, required for parsing JSON bodies

const usersRoute = require('./routes/list');
const authRoute = require('./routes/users');
const actRoute = require('./routes/activity');

app.use('/api', usersRoute);
app.use('/api/act', actRoute);
app.use('/auth', authRoute);

console.log('Starting server...');
app.listen(8080, () => console.log('Server running at http://localhost:3000'));
