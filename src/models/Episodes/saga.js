import {
  all, call, put, takeEvery, takeLatest, select,
} from 'redux-saga/effects'

import actions from './actions'
import api from './api'
import selectors from './selectors'
import types from './types'

function* loadEpisodes() {
  try {
    const { next } = select(selectors.pagination)

    const { results, info } = yield api.getAll()  //TODO: add real pagination logic

    yield put(actions.load.success({
      episodes: results,
      pagination: {
        current: next,
        next: info.next,
        previous: info.prev,
      },
    }))
  } catch (error) {
    yield put(actions.load.failure())
  }
}

function* refreshEpisodes() {
  try {
    const { results, info } = yield api.getAll()

    yield put(actions.load.success({
      episodes: results,
      pagination: {
        current: 1,
        next: info.next,
        previous: info.prev,
      },
    }))
  } catch (error) {
    yield put(actions.load.failure())
  }
}

export default function* () {
  yield all([
    call(function* watch() {
      yield takeEvery(types.load.init, loadEpisodes)
      yield takeEvery(types.refresh.init, refreshEpisodes)
    }),
  ])
}
