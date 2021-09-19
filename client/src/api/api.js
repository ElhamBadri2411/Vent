import axios from 'axios';

const url = 'https://vent-project.herokuapp.com/message'

export const getMessage = () => axios.get(url);
export const createMessage = (newMessage) => axios.post(url, newMessage);