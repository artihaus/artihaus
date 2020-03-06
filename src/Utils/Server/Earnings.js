import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const EarningApi = {

  create: (data) => {
    console.log(data)
    return axios.get(`${baseUrl}${apiKey}/earnings/read`, data);
  },

  read: (data) => {
    return axios.post(`${baseUrl}${apiKey}/earnings/read`, data);
  },

  readAll: (data) => {
    return axios.get(`${baseUrl}${apiKey}/expenses/read`, data);
  },

  read_latest: (data) => {
    return axios.get(`${baseUrl}${apiKey}/earnings/read-latest`, data);
  },

  readById: (data) => {
    console.log(data)
    return axios.post(`${baseUrl}${apiKey}/earnings/read/:_id`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}${apiKey}/earnings/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}${apiKey}/earnings/delete`, data);
  }
}

export default EarningApi