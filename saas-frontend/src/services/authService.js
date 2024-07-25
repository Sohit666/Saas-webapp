import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the API URL if needed

const register = async (name, email, password, company) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
    company,
  });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
