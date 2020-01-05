import types from './types'

export default {
  load: {
    init: () => ({
      type: types.load.init,
      payload: null,
    }),
    success: ({ characters, pagination }) => ({
      type: types.load.success,
      payload: { characters, pagination },
    }),
    failure: () => ({
      type: types.load.failure,
      payload: null,
    }),
  },
  refresh: {
    init: () => ({
      type: types.refresh.init,
      payload: null,
    }),
    success: ({ characters, pagination }) => ({
      type: types.refresh.success,
      payload: { characters, pagination },
    }),
    failure: () => ({
      type: types.refresh.failure,
      payload: null,
    }),
  },
}
