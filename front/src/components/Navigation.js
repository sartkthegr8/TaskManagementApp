import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuthContext();

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          Home
        </Link>
        <div>
          {!user ? (
            <>
              <Link
                to="/signup"
                className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="inline-block bg-gray-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="inline-block bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ml-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
