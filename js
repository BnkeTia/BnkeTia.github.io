// index.js
const express = require('express');
const { getMedicalInfo } = require('./utils');

const app = express();
const port = process.env.PORT || 3000;

// Route for the homepage
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to MedInfo APP</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f8f9fa;
        }
        .container {
          text-align: center;
        }
        h1 {
          color: #007BFF;
          margin-bottom: 20px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
        }
        a {
          color: #007BFF;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        img {
          width: 200px;
          height: auto;
          margin-bottom: 20px;
        }
        .search-container {
          margin-top: 20px;
        }
        input[type="text"] {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-right: 10px;
          width: 250px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #007BFF;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to MedInfo</h1>
        <img src='/images/medi.jpeg' alt="Medical Icon">
        <p>MedInfo APP is a simple medical information service.</p>
        <p>Get information about common medical conditions:</p>
        <ul>
          <li><a href="/api/medical-info/headache">Headache</a></li>
          <li><a href="/api/medical-info/fever">Fever</a></li>
          <li><a href="/api/medical-info/cough">Cough</a></li>
          <li><a href="/api/medical-info/flu">Flu</a></li>
          <li><a href="/api/medical-info/heartburn">Heartburn</a></li>
          <!-- Add more condition links here -->
        </ul>
        <div class="search-container">
          <input type="text" placeholder="Search for a condition...">
          <button onclick="searchMedicalInfo()">Search</button>
        </div>
      </div>
      
      <script>
        function searchMedicalInfo() {
          const searchTerm = document.querySelector('input[type="text"]').value.trim();
          if (searchTerm !== '') {
            window.location.href = '/api/medical-info/' + searchTerm.toLowerCase();
          }
        }
      </script>
    </body>
    </html>
  `);
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
