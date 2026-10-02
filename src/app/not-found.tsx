import React from 'react';


const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl">Page Not Found</h2>
      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;


