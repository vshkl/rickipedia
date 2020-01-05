import {
  all, call, put, takeEvery, takeLeading, select,
} from 'redux-saga/effects'

import actions from './actions'
import api from './api'
import selectors from './selectors'
import types from './types'

function* loadCharacters() {
  try {
    const { next } = yield select(selectors.pagination)

    if (next) {
      const { results, info } = yield api.getAll(next)

      yield put(actions.load.success({
        characters: results,
        pagination: {
          current: next,
          next: info.next,
          previous: info.prev,
        },
      }))
    }
  } catch (error) {
    yield put(actions.load.failure())
  }
}

function* refreshCharacters() {
  try {
    const { results, info } = yield api.getAll(1)

    yield put(actions.refresh.success({
      characters: results,
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
      yield takeLeading(types.load.init, loadCharacters)
      yield takeEvery(types.refresh.init, refreshCharacters)
    }),
  ])
}
