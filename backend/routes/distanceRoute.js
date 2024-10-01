import express from 'express';
import { calculateDistance } from "../controllers/distanceController.js"; // Import the controller function

const distanceRouter = express.Router();

// POST route to calculate distance
distanceRouter.post('/distance', calculateDistance);

export default distanceRouter; // Export the router
