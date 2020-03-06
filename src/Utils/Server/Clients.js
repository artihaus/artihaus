import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const ClientsApi = {

  create: (data) => {
    return axios.post(`${baseUrl}/clients/create`, data);
  },

  read: (data) => {
    return axios.post(`${baseUrl}/clients/read`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}/clients/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}/clients/delete`, data);
  }
}

export default ClientsApi