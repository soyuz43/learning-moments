// File: /services/getPosts.jsx

export const getAllPosts = async () => {
    const response = await fetch('http://localhost:8088/POSTS');
    const data = await response.json();
    return data;
  };
  