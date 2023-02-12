import axios from 'axios';

axios.defaults.baseURL = 'https://63e8cd125f3e35d898f5b4e9.mockapi.io/api/v1/';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};
