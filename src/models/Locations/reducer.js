import types from './types'

const initialState = {
  loading: 'idle',  //One of: 'idle', 'loading', 'refreshing'
  locations: [],
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
        loading: 'loading',
      }
    case types.load.success:
      return {
        ...state,
        loading: 'idle',
        locations: [...state.locations, ...payload.locations],
        pagination: payload.pagination,
      }
    case types.load.failure:
      return {
        ...state,
        loading: 'idle',
      }
    case types.refresh.init:
      return {
        ...state,
        loading: 'refreshing',
      }
    case types.refresh.success:
      return {
        ...state,
        loading: 'idle',
        locations: payload.locations,
        pagination: payload.pagination,
      }
    case types.refresh.failure:
      return {
        ...state,
        loading: 'idle',
      }
    default:
      return state
  }
}
