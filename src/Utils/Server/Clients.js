import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const ClientsApi = {

  create: (data) => {
    console.log(data)
    return axios.post(`${baseUrl}${apiKey}/clients/create`, data);
  },

  read: (data) => {
    return axios.post(`${baseUrl}${apiKey}/clients/read`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}${apiKey}/clients/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}${apiKey}/clients/delete`, data);
  }
}

export default ClientsApi