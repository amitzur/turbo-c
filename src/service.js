import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const getFilesInFolder = async (folder = '') => axios.get(`/folder/${folder}`).then(resp => resp.data);

export const getFileContent = async (file = '') => axios.get(`/file/${file}`).then(resp => resp.data);