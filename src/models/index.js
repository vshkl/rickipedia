import { all, call } from 'redux-saga/effects'

import CharactersReducer from './Characters/reducer'
import EpisodesReducer from './Episodes/reducer'

import CharactersSaga from './Characters/saga'
import EpisodesSaga from './Episodes/saga'

export default {
  reducers: {
    characters: CharactersReducer,
    episodes: EpisodesReducer,
  },
  sagas: function* watch() {
    yield all([
      call(CharactersSaga),
      call(EpisodesSaga),
    ])
  },
}
