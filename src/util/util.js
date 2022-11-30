import axios from 'axios';
// const url = 'https://637f91dd2f8f56e28e90521b.mockapi.io/tyrs';

export async function get(url) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}

export const numRandom = (max = 10) =>
  Math.floor(Math.random() * (max - 1)) + 1;
