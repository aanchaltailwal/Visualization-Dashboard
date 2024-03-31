// src/FilterComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopicsFilter = ({ onDataFiltered }) => {
  const [topicsOptions, setTopicsOptions] = useState([]);

  useEffect(() => {
    // Fetch available topics from your API
    axios.get('/api/topics')
      .then(response => {
        setTopicsOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  const handleTopicChange = (selectedTopic) => {
    // Pass selected topic to parent component
    onDataFiltered({ topic: selectedTopic });
  };

  return (
    <div>
      <h2>Topics</h2>
      <select onChange={(e) => handleTopicChange(e.target.value)}>
        <option value="">Select Topic</option>
        {topicsOptions.map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
      {/* Add other filter components */}
    </div>
  );
};

export default TopicsFilter;
