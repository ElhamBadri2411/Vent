import axios from 'axios';

const url = 'http://localhost:3000'

export const getMessage = () => axios.get(url);
export const createMessage = (newMessage) => axios.post(url)