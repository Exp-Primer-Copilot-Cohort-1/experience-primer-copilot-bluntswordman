// Create web server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Middleware to log the request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} from ${req.originalUrl}`);
  next();
});

// Middleware to check if the request has a valid token
app.use((req, res, next) => {
  const token = req.query.token;
  if (!token) {
    res.status(401).send('Unauthorized! Please provide a token.');
  } else if (token !== '123456') {
    res.status(403).send('Forbidden! Invalid token.');
  } else {
    next();
  }
});

// Route to get all comments
app.get('/comments', (req, res) => {
  res.status(200).send('Get all comments');
});

// Route to get a comment by ID
app.get('/comments/:id', (req, res) => {
  res.status(200).send(`Get comment ${req.params.id}`);
});

// Route to create a new comment
app.post('/comments', (req, res) => {
  res.status(201).send('Create a new comment');
});

// Route to update a comment by ID
app.put('/comments/:id', (req, res) => {
  res.status(200).send(`Update comment ${req.params.id}`);
});

// Route to delete a comment by ID
app.delete('/comments/:id', (req, res) => {
  res.status(204).send(`Delete comment ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});