/* eslint-disable no-console */
import axios from 'axios'
import store from '../store'

export const getWeather = (lat, lng) => {
  try {
    if (lat === null && lng === null) {
      lat = 51.5074
      lng = 0.1278
    }
    const response = axios.get(`/api/weather?lat=${lat}&lng=${lng}`)
    store.weather = response
  } catch (err) {
    console.log(err)
  }
}

export const getSportsData = () => {
  try {
    const response = axios.get('/api/sports')
    store.sports = response
  } catch (err) {
    console.log(err)
  }
}

export const getNews = () => {
  try {
    const response = axios.get('/api/news')
    store.news = response
  } catch (err) {
    console.log(err)
  }
}

export const getClothesData = () => {
  try {
    const response = axios.get('/api/clothes')
    store.clothes = response
  } catch (err) {
    console.log(err)
  }
}
