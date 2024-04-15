// File: /components/AllPosts.js

import React, { useState, useEffect } from 'react';
import { getTopics } from '../services/topicServices';
import { getAllPosts } from '../services/fetchPosts';
import { PostFilters } from './PostFilters';
import './componentStyles/AllPosts.css';

export const AllPosts = () => {
  const [topics, setTopics] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');                                                           // * State to track the currently selected topic ID for filtering [ITS A STRING!]
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetches topics and posts from the server when the component mounts.
    const fetchData = async () => {
      const topicsData = await getTopics();  // Fetch topic data
      const postsData = await getAllPosts(); // Fetch post data
      setTopics(topicsData);
      setPosts(postsData);                   // Set posts without flattening
    };

    fetchData();
  }, []);

 
  const getTopicName = (topicID) => {                                                                             // * Get topic name by ID
    const topic = topics.find(t => t.id === topicID);
    return topic ? topic.name : "Unknown Topic";
  };

  
  const getFilteredPosts = () => {                                                                              // * Determines which posts to show based on the selected topic and search term
    let filtered = posts;
    if (selectedTopic) {
      filtered = filtered.filter(post => post.topicID === Number(selectedTopic));
    }
    if (searchTerm) {
      filtered = filtered.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return filtered;
  };


  return (
    <div className="topics-container">
      <PostFilters
        topics={topics}
        onTopicSelect={setSelectedTopic}
        onSearch={setSearchTerm}
      />
      {getFilteredPosts().length > 0 ? (
        getFilteredPosts().map(post => (
          <div key={post.id} className="post">
            <h3 className="topic-title">{getTopicName(post.topicID)}</h3>  
            <h4 className="post-title">{post.title}</h4>
            <p className="post-body">{post.body}</p>
            <p className="post-date">Date Posted: {post.datePosted}</p>
            {post.dateEdited && <p className="post-edit-date">Date Edited: {post.dateEdited}</p>}
          </div>
        ))
      ) : (
        <p>No posts found.</p>  // ! Display message if no posts match the filters
      )}
    </div>
  );
};
