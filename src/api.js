import axios from 'axios';

//Json-server
const API_BASE_URL = "http://localhost:3001";  

export const fetchUsers = () => axios.get(`${API_BASE_URL}/users`);
export const fetchRoles = () => axios.get(`${API_BASE_URL}/roles`);
export const addUser = (user) => axios.post(`${API_BASE_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_BASE_URL}/users/${id}`, user);  
export const deleteUser = (id) => axios.delete(`${API_BASE_URL}/users/${id}`);
export const addRole = (role) => axios.post(`${API_BASE_URL}/roles`, role);
export const updateRole = (id, role) => axios.put(`${API_BASE_URL}/roles/${id}`, role);  
export const deleteRole = (id) => axios.delete(`${API_BASE_URL}/roles/${id}`);
