// Function to get medical information based on a specific condition
function getMedicalInfo(condition) {
  // Simulate fetching information from a database or API
  const medicalData = {
    headache: "Take some pain relievers(Analgesics) and rest.",
    fever: "Drink plenty of fluids and take fever-reducing medication.",
    cough: "Stay hydrated and consider taking cough syrup.",
    // Add more conditions and corresponding information here
  };

  return medicalData[condition] || "No specific information available for this condition.";
}

module.exports = { getMedicalInfo };
