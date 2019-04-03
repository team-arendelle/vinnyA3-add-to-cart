import axios from 'axios';

const id = window.location.pathname.split('/').pop();

export default axios.get(`${process.env.API_URL}/api/${id || 3}`);
