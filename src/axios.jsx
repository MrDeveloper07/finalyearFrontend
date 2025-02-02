import axios from 'axios';

// Create an Axios instance to centralize API calls
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/auth/signup',  // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
