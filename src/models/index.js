import { all, call } from 'redux-saga/effects'

import EpisodesReducer from './Episodes/reducer'

import EpisodesSaga from './Episodes/saga'

export default {
  reducers: {
    episodes: EpisodesReducer,
  },
  sagas: function* watch() {
    yield all([
      call(EpisodesSaga),
    ])
  },
}
