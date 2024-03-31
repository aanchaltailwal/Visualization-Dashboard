// src/VisualizationComponent.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const VisualizationComponent = ({ data }) => {
  // Example: Create a bar chart for intensity by topic
  const chartData = {
    labels: data.map(item => item.Topic),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.Intensity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      // Add more datasets for other variables (Likelihood, Relevance, etc.)
    ],
  };

  return (
    <div>
      <h2>Visualizations</h2>
      <Bar data={chartData} />
      {/* Add other visualizations */}
    </div>
  );
};

export default VisualizationComponent;
