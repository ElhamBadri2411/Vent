import axios from 'axios';

const url = 'http://localhost:5000/message'

export const getMessage = () => axios.get(url);
export const createMessage = (newMessage) => axios.post(url, newMessage);