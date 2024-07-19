import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token in localStorage on initial render
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and get user info
      axios.get('http://localhost:5000/me', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.error('Token validation error:', error);
        localStorage.removeItem('token');
      });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setUser(user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
