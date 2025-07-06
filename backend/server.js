const express = require('express');
const cors = require("cors");
const app = express();

// Include route files
const usersRoute = require('./routes/list');

app.use(cors({ origin: "http://localhost:5173" }));

// Use routes
app.use('/api', usersRoute);

app.listen(3000)