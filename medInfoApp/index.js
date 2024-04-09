const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Use the routes defined in routes.js
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
