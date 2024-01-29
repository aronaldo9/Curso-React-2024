// import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Acerca de nosotros</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quam esse totam amet
        cum id quidem illum facilis earum corrupti dolorem vel soluta animi autem
        laudantium officiis, dicta, corporis quo!
      </p>
      <Link to={'/'} className="text-blue-500 hover:underline">
        Volver a Home
      </Link>
    </div>
  );
};

export default About;
