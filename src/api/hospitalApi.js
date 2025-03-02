import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

// Create a new hospital
export const createHospital = async (hospitalData) => {
  try {
    const response = await axios.post(`${API_URL}/hospitals/create`, hospitalData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get hospitals by city
export const getHospitalsByCity = async (city = '') => {
  try {
    const response = await axios.get(`${API_URL}/hospitals${city ? `?city=${city}` : ''}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get hospital by ID
export const getHospitalById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/hospitals/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete hospital
export const deleteHospital = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/hospitals/delete?id=${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update hospital
export const updateHospital = async (id, hospitalData) => {
  try {
    const response = await axios.put(`${API_URL}/hospitals/update?id=${id}`, hospitalData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Add hospital details
export const addHospitalDetails = async (id, detailsData) => {
  try {
    const response = await axios.post(`${API_URL}/hospitals/details?id=${id}`, detailsData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};