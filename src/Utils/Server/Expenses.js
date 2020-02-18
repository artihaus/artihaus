import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const ProjectsApi = {

  create: (data) => {
    console.log(data)
    return axios.get(`${baseUrl}${apiKey}/expenses/read`, data);
  },

  read: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/read`, data);
  },

  readAll: (data) => {
    return axios.get(`${baseUrl}${apiKey}/expenses/read`, data);
  },

  read_false: (data) => {
    return axios.get(`${baseUrl}${apiKey}/expenses/read-false`, data);
  },

  readById: (data) => {
    console.log(data)
    return axios.post(`${baseUrl}${apiKey}/expenses/read/:_id`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}${apiKey}/expenses/delete`, data);
  }
}

export default ProjectsApi