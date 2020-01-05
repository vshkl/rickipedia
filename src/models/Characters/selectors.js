import { createSelector } from 'reselect'

const getCharactersState = state => state.characters

export default {
  pagination: createSelector(
    getCharactersState,
    data => data.pagination,
  ),
  characters: createSelector(
    getCharactersState,
    data => data.characters,
  ),
  loadingState: createSelector(
    getCharactersState,
    data => data.loadingState,
  ),
}
