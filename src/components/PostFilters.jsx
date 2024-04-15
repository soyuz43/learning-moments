// File: /components/PostFilters.js

import React from 'react';

export const PostFilters = ({ topics, onTopicSelect, onSearch }) => {
  return (
    <div className="filter-container">
      <select onChange={(e) => onTopicSelect(e.target.value)} className="topic-dropdown">
        <option value="">All Topics</option>
        {topics.map((topic) => (
          <option key={topic.id} value={topic.id}>
            {topic.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};
