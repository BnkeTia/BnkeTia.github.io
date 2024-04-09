const express = require('express');
const { getMedicalInfo } = require('./utils');

const router = express.Router();

// Route to get medical information based on condition
router.get('/medical-info/:condition', (req, res) => {
  const condition = req.params.condition;
  const medicalInfo = getMedicalInfo(condition);
  res.send(medicalInfo);
});

module.exports = router;
