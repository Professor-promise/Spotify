import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.football-data.org/v4',
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': '6097ad2602e741b689fd1941dd2486ea',
  },
});
