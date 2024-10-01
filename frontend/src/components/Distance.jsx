import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext'



const Distance = () => {

  const { backendUrl } = useContext(ShopContext);
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [distances, setDistances] = useState(null);
  const [error, setError] = useState('');

  const handleCalculateDistance = async () => {
    try {
      const response = await axios.post(backendUrl + '/api/distance/distance', { pickup, drop });
      setDistances(response.data.distances); // Set the calculated distance
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('GOOGLE API IS MISSING PLEASE CONTACT DEVELOPER ENTER MANUAL LOCATION AND KM');
      setDistances(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 space-y-4 md:space-y-0 md:space-x-4">
      <h1 className="text-3xl font-bold mb-0"></h1>Enter Pickup location
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        className="border rounded p-3 w-full md:w-1/3 lg:w-1/4 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Drop Location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
        className="border rounded p-3 w-full md:w-1/3 lg:w-1/4 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleCalculateDistance}
        className="bg-blue-600 text-white rounded px-5 py-3 transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Calculate Distance
      </button>
      {distances !== null && <p className="mt-4 text-lg">Distance: {distances.toFixed(2)} km</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default Distance;
