import axios from 'axios'

const host = process.env.ENV === 'dev' ? 'http://localhost:5000/api' : 'https://nuxt-services.zalo-dev.io/api'

const get = async (endpoint = '', payload = {}) => {
  return await axios.get(`${host}/${endpoint}`, payload)
}

const post = async (endpoint = '', payload = {}) => {
  return await axios.post(`${host}/${endpoint}`, payload)
}

export const api = {
  get,
  post
}
