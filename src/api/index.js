import axios from 'axios'

export default axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  headers: {
    'Content-Type': 'application/octet-stream',
    'x-rapidapi-host': process.env.VUE_APP_API_HOST.replace('https://', ''),
    'x-rapidapi-key': process.env.VUE_APP_API_KEY,
    useQueryString: true
  }
})
