import React from 'react'
import PropTypes from 'prop-types'

import { Row, TextContent, TextTitle, TouchableCard, WrapTitle } from './styled'

const LocationCard = ({ location, onPress }) => {
  return (
    <TouchableCard onPress={() => onPress(location.id)}>
      <WrapTitle>
        <TextTitle>{location.name}</TextTitle>
      </WrapTitle>
      <Row>
        <TextContent>Type</TextContent>
        <TextContent>{location.type === 'unknown' ? 'N/A' : location.type}</TextContent>
      </Row>
      <Row>
        <TextContent>Dimension</TextContent>
        <TextContent>{location.dimension === 'unknown' ? 'N/A' : location.dimension}</TextContent>
      </Row>
    </TouchableCard>
  )
}

const { number, string, func, shape } = PropTypes

LocationCard.propTypes = {
  location: shape({
    id: number,
    name: string,
    type: string,
    dimension: string,
  }).isRequired,
  onPress: func,
}

LocationCard.defaultProps = {
  onPress: () => null,
}

export default LocationCard
