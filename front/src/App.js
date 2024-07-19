// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import Dashboard from './components/Dashboard/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

const NavBar = () => {
  const location = useLocation();
  const showHomeLink = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {showHomeLink && <Link to="/" className="text-xl font-bold">Home</Link>}
      </div>
    </nav>
  );
};

export default App;
