import React, { useState } from 'react';

export default function Progress() {
  const [chartUrl, setChartUrl] = useState('http://localhost:8000/api/charts/weekly-calories');

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Progress</h1>
      <p className="mb-4">Weekly Calories Chart from Backend:</p>
      <div className="border p-4 rounded bg-white shadow-sm inline-block">
        <img 
          src={chartUrl} 
          alt="Weekly Calories Chart" 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div style={{display: 'none'}} className="text-red-500">
          Failed to load chart. Make sure backend is running on port 8000.
        </div>
      </div>
    </div>
  );
}
