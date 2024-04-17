// Function to get medical information based on a specific condition
function getMedicalInfo(condition) {
  // Simulate fetching information from a database or API
  const medicalData = {
    'abdominal pain': {
      advice: "Avoid heavy meals and consult a doctor if severe.",
      drugs: ["Antacids", "Ibuprofen"]
    },
    'cough': {
      advice: "Stay hydrated and consider taking cough syrup.",
      drugs: ["Cough syrup", "Acetaminophen"]
    },
    'fever': {
      advice: "Drink plenty of fluids and take fever-reducing medication.",
      drugs: ["Acetaminophen", "Ibuprofen"]
    },
    'headache': {
      advice: "Take some pain relievers (Analgesics) and rest.",
      drugs: ["Acetaminophen", "Ibuprofen"]
    },
    'sore throat': {
      advice: "Gargle with warm salt water and rest your voice.",
      drugs: ["Throat lozenges", "Acetaminophen"]
    },
    'stomach ache': {
      advice: "Avoid heavy meals and try over-the-counter antacids.",
      drugs: ["Antacids", "Pepto-Bismol"]
    },
    'sunburn': {
      advice: "Apply soothing lotion and stay hydrated.",
      drugs: ["Aloe vera gel", "Ibuprofen"]
    },
    // Add more conditions and corresponding information here
  };

  // Sort conditions alphabetically
  const sortedConditions = Object.keys(medicalData).sort();

  // If condition exists in the medicalData object, return corresponding information
  if (medicalData.hasOwnProperty(condition)) {
    const { advice, drugs } = medicalData[condition];
    return {
      advice,
      drugs: drugs.length > 0 ? drugs : ["No specific drugs recommended"]
    };
  } else {
    return "No specific information available for this condition.";
  }
}

module.exports = { getMedicalInfo };
