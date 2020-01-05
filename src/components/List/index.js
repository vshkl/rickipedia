import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

const List = ({ data, renderItem, onRefresh, onEndReached }) => (
  <FlatList
    data={data}
    keyExtractor={it => it.id.toString()}
    refreshing={false}
    renderItem={renderItem}
    onRefresh={onRefresh}
    onEndReached={onEndReached}
  />
)

const { array, func } = PropTypes

List.propTypes = {
  data: array,
  renderItem: func,
  onRefresh: func,
  onEndReached: func,
}

List.defaultProps = {
  renderItem: () => null,
  onRefresh: () => null,
  onEndReached: () => null,
}
export default List
