import axios from 'axios';
import { authService } from '../services/auth';

export const api = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: {
    Authorization: `Bearer ${authService.token$}`
  }
});
