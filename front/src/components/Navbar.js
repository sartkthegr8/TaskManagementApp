import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Assuming you have an AuthContext

const Navbar = () => {
  const { user, logout } = useAuthContext(); // Use the AuthContext to get user and logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex items-center justify-between">
      <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/signup" className="mr-4 hover:underline">Sign Up</Link>
        <Link to="/login" className="mr-4 hover:underline">Login</Link>
        <Link to="/dashboard" className="mr-4 hover:underline">Dashboard</Link>
      </div>
      {user && (
        <div className="flex items-center">
          <span className="mr-4">Hello, {user.name}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
