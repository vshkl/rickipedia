import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

const List = ({ data, renderItem }) => (
  <FlatList
    data={data}
    keyExtractor={it => it.id}
    renderItem={renderItem}
  />
)

const { array, func } = PropTypes

List.propTypes = {
  data: array,
  renderItem: func,
}

List.defaultProps = {
  renderItem: () => null,
}
export default List
