import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

const List = ({ data, loading, refreshing, renderItem, onRefresh, onEndReached }) => (
  <FlatList
    data={data}
    keyExtractor={it => it.id.toString()}
    refreshing={refreshing}
    renderItem={renderItem}
    onRefresh={onRefresh}
    onEndReached={onEndReached}
  />
)

const { array, bool, func } = PropTypes

List.propTypes = {
  data: array.isRequired,
  loading: bool,
  refreshing: bool,
  renderItem: func,
  onRefresh: func,
  onEndReached: func,
}

List.defaultProps = {
  loading: false,
  refreshing: false,
  renderItem: () => null,
  onRefresh: () => null,
  onEndReached: () => null,
}
export default List
