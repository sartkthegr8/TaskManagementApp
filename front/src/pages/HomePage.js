import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Task Management App</h1>
        <p className="text-gray-400 mb-6">Manage your tasks efficiently and stay organized.</p>
        <div>
          <Link to="/signup" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2">
            Sign Up
          </Link>
          <Link to="/login" className="inline-block bg-gray-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
