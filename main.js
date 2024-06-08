import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <img src="path/to/hero/image" alt="Hero Image" />
      <Link to="/gallery">Go To Gallery</Link>
    </div>
  );
};

export default Home;
