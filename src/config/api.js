
import axios from 'axios';
const DEPLOYED='https://pear-poised-hen.cyclic.app/'
<<<<<<< HEAD
const LOCALHOST='http://106.51.242.196:2109/'
=======
const LOCALHOST='http://106.51.242.196:2109'
>>>>>>> 45d158ee0a8545fb5f600d8daa91116eda440176

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
