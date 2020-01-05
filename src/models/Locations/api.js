import axios from 'axios'

import { mapLinksToIds, mapResponse } from 'src/utils/mappers'

const mapResults = (results) =>
  results.map(it => ({
    id: it.id,
    name: it.name,
    type: it.type,
    dimension: it.dimension,
    residents: mapLinksToIds(it.residents),
  }))

const getAll = (page) =>
  axios
    .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
    .then(mapResponse(mapResults))

export default {
  getAll,
}
