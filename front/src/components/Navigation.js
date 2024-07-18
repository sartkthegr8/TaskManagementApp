// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          Home
        </Link>
        <div>
          <Link to="/signup" className="text-white mr-4 hover:underline">
            Sign Up
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
