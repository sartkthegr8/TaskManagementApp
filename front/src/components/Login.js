import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white"
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 mb-4 rounded">
            Login
          </button>
         
            <Link to="/signup" className="text-blue-400 px-4 ">Sign Up</Link>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
