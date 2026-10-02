import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import LibrarySection from './component/LibrarySection';

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <LibrarySection></LibrarySection>
    </div>
  );
};

export default page;