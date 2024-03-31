// src/FilterComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterComponent = ({ onDataFiltered }) => {
  const [endYearOptions, setEndYearOptions] = useState([]);

  useEffect(() => {
    // Fetch available end years from your API
    axios.get('/api/endYears')
      .then(response => {
        setEndYearOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching end years:', error);
      });
  }, []);

  const handleYearChange = (selectedYear) => {
    // Pass selected year to parent component
    onDataFiltered({ endYear: selectedYear });
  };

  return (
    <div>
      <h2>Filters</h2>
      <select onChange={(e) => handleYearChange(e.target.value)}>
        <option value="">Select End Year</option>
        {endYearOptions.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      {/* Add other filter components */}
    </div>
  );
};

export default FilterComponent;
