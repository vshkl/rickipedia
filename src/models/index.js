import { all, call } from 'redux-saga/effects'

import CharactersReducer from './Characters/reducer'
import EpisodesReducer from './Episodes/reducer'
import LocationsReducer from './Locations/reducer'

import CharactersSaga from './Characters/saga'
import EpisodesSaga from './Episodes/saga'
import LocationsSaga from './Locations/saga'

export default {
  reducers: {
    characters: CharactersReducer,
    episodes: EpisodesReducer,
    locations: LocationsReducer,
  },
  sagas: function* watch() {
    yield all([
      call(CharactersSaga),
      call(EpisodesSaga),
      call(LocationsSaga),
    ])
  },
}
