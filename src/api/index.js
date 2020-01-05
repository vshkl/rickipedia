import axios from 'axios'

const baseURL = 'https://rickandmortyapi.com/api'

const getCharacters = (page) =>
  axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)

const getEpisodes = (page) =>
  axios.get(`${baseURL}/episode/?page=${page}`)

const getLocations = (page) =>
  axios.get(`${baseURL}/location/?page=${page}`)

export {
  getCharacters,
  getEpisodes,
  getLocations,
}
