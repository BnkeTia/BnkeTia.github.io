const express = require('express');
const path = require('path');
const { getMedicalInfo } = require('./utils');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname)));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
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
