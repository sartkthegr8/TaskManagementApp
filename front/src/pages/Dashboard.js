// src/pages/Dashboard.js
import React from 'react';
import { useAuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuthContext();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-700 mb-6">Welcome to your dashboard, {user ? user.name : 'User'}!</p>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
