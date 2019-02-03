import axios from 'axios'
import { TokenService } from '@/services/storage.service'

const ApiService = {
  HTTP: null,

  init(baseURL) {
    this.HTTP = axios.create({
      baseURL: baseURL
    })
  },

  setHeader() {
    this.HTTP.defaults.headers.common['Authorization'] = `Bearer ${TokenService.getToken()}`
  },

  removeHeader() {
    this.HTTP.defaults.headers.common = {}
  }
}

export default ApiService
