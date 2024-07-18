import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard'; // Import Dashboard component
import NotFoundPage from './pages/NotFoundPage';
import { TaskProvider } from './context/TaskContext'; // Import TaskProvider
import './App.css';

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
};

export default App;
