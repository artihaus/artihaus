import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const ExpenseApi = {

  create: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/create`, data);
  },

  read: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/read`, data);
  },


  read_date_range: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/read-date-range`, data);
  },

  read_false: (data) => {
    return axios.get(`${baseUrl}${apiKey}/expenses/read-false`, data);
  },

  readById: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/read/:_id`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/delete`, data);
  }
}

export default ExpenseApi