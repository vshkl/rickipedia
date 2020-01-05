import types from './types'

export default {
  load: {
    init: () => ({
      type: types.load.init,
      payload: null,
    }),
    success: ({ episodes, pagination }) => ({
      type: types.load.success,
      payload: { episodes, pagination },
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
    success: ({ episodes, pagination }) => ({
      type: types.refresh.success,
      payload: { episodes, pagination },
    }),
    failure: () => ({
      type: types.refresh.failure,
      payload: null,
    }),
  },
}
