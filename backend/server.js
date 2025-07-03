const express = require('express');
const app = express();

// Include route files
const usersRoute = require('./routes/list');

// Use routes
app.use('/api', usersRoute);

app.listen(3000)