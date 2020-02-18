import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const UsersApi = {

  create: (data) => {
    console.log(data)
    return axios.post(`${baseUrl}${apiKey}/users/create`, data);
  },

  read: (data) => {
    return axios.get(`${baseUrl}${apiKey}/users/read`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}${apiKey}/users/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}${apiKey}/users/delete`, data);
  }
}

export default UsersApi