import axios from 'axios'

import { mapLinksToIds, mapResponse, mapSeasonNumber, mapEpisodeNumber } from 'src/utils/mappers'

const mapResults = (results) =>
  results.map(it => ({
    id: it.id,
    name: it.name,
    airDate: it.air_date,
    season: mapSeasonNumber(it.episode),
    episode: mapEpisodeNumber(it.episode),
    characters: mapLinksToIds(it.characters),
  }))

const getAll = (page) =>
  axios
    .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
    .then(mapResponse(mapResults))

export default {
  getAll,
}
