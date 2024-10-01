import axios from 'axios';
import cors from'cors'

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY; // Get the API key from environment variables

// Function to calculate distance
 const calculateDistance = async (req, res) => {
  const { pickup, drop } = req.body; // Extract pickup and drop from request body

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${pickup}&destinations=${drop}&key=${GOOGLE_MAPS_API_KEY}`
    );

    const distanceData = response.data.rows[0].elements[0];
    if (distanceData.status === "OK") {
      const distanceInKm = distanceData.distance.value / 1000; // Convert meters to kilometers
      res.json({ distance: distanceInKm }); // Respond with the distance
    } else {
      res.status(400).json({ error: 'Could not calculate distance' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export{calculateDistance}
