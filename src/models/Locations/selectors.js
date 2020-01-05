import { createSelector } from 'reselect'

const getLocationsState = state => state.locations

export default {
  pagination: createSelector(
    getLocationsState,
    data => data.pagination,
  ),
  locations: createSelector(
    getLocationsState,
    data => data.locations,
  ),
  loadingState: createSelector(
    getLocationsState,
    data => data.loadingState,
  ),
}
