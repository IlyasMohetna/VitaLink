import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.11.116:8000',
});

export default instance;