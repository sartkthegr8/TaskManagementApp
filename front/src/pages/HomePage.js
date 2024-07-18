// src/pages/HomePage.js
import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome to the Task Management App
        </h1>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowLogin(true)}
            className={`mr-2 px-4 py-2 rounded-full focus:outline-none ${
              showLogin ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className={`px-4 py-2 rounded-full focus:outline-none ${
              !showLogin ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Sign Up
          </button>
        </div>
        {showLogin ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default HomePage;
