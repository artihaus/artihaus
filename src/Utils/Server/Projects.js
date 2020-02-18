import axios from 'axios';
import { baseUrl, apiKey } from '../Api/api'

const ProjectsApi = {

  create: (data) => {
    return axios.post(`${baseUrl}${apiKey}/projects/create`, data);
  },

  read: (data) => {
    return axios.get(`${baseUrl}${apiKey}/projects/read`, data);
  },

  read_false: (data) => {
    return axios.get(`${baseUrl}${apiKey}/projects/read-false`, data);
  },

  readById: (data) => {
    return axios.post(`${baseUrl}${apiKey}/projects/read/:_id`, data);
  },

  update: (data) => {
    return axios.post(`${baseUrl}${apiKey}/projects/update`, data);
  },

  remove: (data) => {
    return axios.post(`${baseUrl}${apiKey}/projects/delete`, data);
  }
}

export default ProjectsApi