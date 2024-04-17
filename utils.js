// utils.js

// Function to get medical information based on a specific condition
function getMedicalInfo(condition) {
  const medicalData = {
    headache: "Take some pain relievers (Analgesics) and rest.",
    fever: "Drink plenty of fluids and take fever-reducing medication.",
    cough: "Stay hydrated and consider taking cough syrup.",
    flu: "Rest, drink fluids, and take over-the-counter medications.",
    heartburn: "Avoid spicy and acidic foods, and consider antacids.",
    // Add more conditions and corresponding information here
  };

  return medicalData[condition.toLowerCase()] || null;
}

module.exports = { getMedicalInfo };
