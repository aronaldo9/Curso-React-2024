// import React from 'react';
import { Link, useParams } from 'react-router-dom';
import posts from '../data';

const Post = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <p>Post no encontrado</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p>{post.content}</p>
      <Link to={'/'} className="text-blue-500 hover:underline">
        Volver a Home
      </Link>
    </div>
  );
};

export default Post;
