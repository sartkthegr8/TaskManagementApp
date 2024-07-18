// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const signup = (user) => {
  return axios.post(`${API_URL}/signup`, user);
};

const login = (user) => {
  return axios.post(`${API_URL}/login`, user);
};

export default { signup, login };
