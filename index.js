// index.js

const express = require('express');
const { getMedicalInfo } = require('./utils');

const app = express();
const port = process.env.PORT || 3000;

// Serve static assets (images, CSS, JavaScript) from the 'public' directory
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to get medical information based on condition
app.get('/api/medical-info/:condition', (req, res) => {
  const condition = req.params.condition;
  const medicalInfo = getMedicalInfo(condition);
  if (medicalInfo) {
    res.send(`<h2>${condition.toUpperCase()}</h2><p>${medicalInfo}</p>`);
  } else {
    res.status(404).send(`<p>Medical information not found for ${condition}</p>`);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
