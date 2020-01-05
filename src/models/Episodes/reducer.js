import types from './types'

const initialState = {
  loading: false,
  episodes: [],
  pagination: {
    current: null,
    next: 1,
    previous: null,
  },
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.load.init:
      return {
        ...state,
        loading: true,
      }
    case types.load.success:
      return {
        ...state,
        loading: false,
        episodes: [...state.episodes, ...payload.episodes],
        pagination: payload.pagination,
      }
    case types.load.failure:
      return {
        ...state,
        loading: false,
      }
    case types.refresh.init:
      return {
        ...state,
        loading: true,
      }
    case types.refresh.success:
      return {
        ...state,
        loading: false,
        episodes: payload.episodes,
        pagination: payload.pagination,
      }
    case types.refresh.failure:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
