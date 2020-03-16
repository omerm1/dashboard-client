import axios from 'axios'
import store from '../store'

export const signUp = (username, email, password) => {
  const obj = {}
  obj.username = username
  obj.email = email
  obj.password = password

  try {
    const response = axios.post('/api/user/signup', obj)
    store.jwt = response.token
    this.getUserDetails(store.jwt)
    console.log(response)
    return true
  } catch (err) {
    console.log(err)
  }
}

export const login = (email, password) => {
  const obj = {}
  obj.email = email
  obj.password = password

  try {
    const response = axios.post('/api/user/login', obj)
    store.jwt = response.token
    console.log('response is', response)
  } catch (err) {
    console.log(err)
  }
}

export const getUserDetails = (jwt) => {
  const headers = { token: jwt }
  try {
    const response = axios.get('/api/user/me', headers)
    store.user.username = response.username
  } catch (err) {
    console.log(err)
  }
}
