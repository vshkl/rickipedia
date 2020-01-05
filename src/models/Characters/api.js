import axios from 'axios'

import { mapLinkToId, mapLinksToIds, mapResponse } from 'src/utils/mappers'

const mapResults = (results) =>
  results.map(it => ({
    id: it.id,
    name: it.name,
    status: it.status,
    species: it.species,
    gender: it.gender,
    image: it.image,
    origin: mapLinkToId(it.origin.url),
    location: mapLinkToId(it.location.url),
    episodes: mapLinksToIds(it.episode),
  }))

const getAll = (page) =>
  axios
    .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(mapResponse(mapResults))

export default {
  getAll,
}
