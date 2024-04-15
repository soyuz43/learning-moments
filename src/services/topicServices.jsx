// File: /services/topicServices.js

export const getTopics = async () => {
    const response = await fetch('http://localhost:8088/topics');
    const data = await response.json();
    return data;
  };
  
  // export const getPostsByTopic = async (topicId) => {
  //   const response = await fetch(`http://localhost:8088/posts?topicID=${topicId}`);
  //   const data = await response.json();
  //   return data;
  // };
  