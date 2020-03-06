import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const UsersApi = {

  create: (data) => {
    console.log(data)
    return axios.post(`${baseUrl}/users/create`, data);
  },

  read: (data) => {
    return axios.get(`${baseUrl}/users/read`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}/users/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}/users/delete`, data);
  }
}

export default UsersApi