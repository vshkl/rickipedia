import { createSelector } from 'reselect'

const getEpisodesState = state => state.episodes

export default {
  pagination: createSelector(
    getEpisodesState,
    data => data.pagination,
  ),
  episodes: createSelector(
    getEpisodesState,
    data => data.episodes,
  ),
  loadingState: createSelector(
    getEpisodesState,
    data => data.loadingState,
  ),
}
