import axios from 'axios';

const url = 'http://localhost:3000'

export const getMessage = () => axios.get(url);