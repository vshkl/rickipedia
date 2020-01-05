import { createSelector } from 'reselect'

const getEpisodesState = state => state.coins

export default {
  pagination: createSelector(
    getEpisodesState,
    data => data.pagination,
  ),
}
