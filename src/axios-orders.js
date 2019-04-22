import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-d8aba.firebaseio.com/'
})

export default instance
