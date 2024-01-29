// import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data.js';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
