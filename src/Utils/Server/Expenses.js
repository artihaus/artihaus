import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const ExpenseApi = {

  create: (data) => {
    return axios.post(`${baseUrl}/expenses/create`, data);
  },

  read: (data) => {
    return axios.post(`${baseUrl}/expenses/read`, data);
  },


  read_date_range: (data) => {
    return axios.post(`${baseUrl}/expenses/read-date-range`, data);
  },

  read_false: (data) => {
    return axios.get(`${baseUrl}/expenses/read-false`, data);
  },

  readById: (data) => {
    return axios.post(`${baseUrl}/expenses/read/:_id`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}/expenses/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}/expenses/delete`, data);
  }
}

export default ExpenseApi