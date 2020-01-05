import React from 'react'
import PropTypes from 'prop-types'

import { Row, TextContent, TextTitle, TouchableCard, WrapTitle } from './styled'

const CharacterCard = ({ character, onPress }) => {
  return (
    <TouchableCard onPress={() => onPress(character.id)}>
      <WrapTitle>
        <TextTitle>{character.name}</TextTitle>
      </WrapTitle>
      <Row>
        <TextContent>Status</TextContent>
        <TextContent>{character.status}</TextContent>
      </Row>
      <Row>
        <TextContent>Species</TextContent>
        <TextContent>{character.species}</TextContent>
      </Row>
      <Row>
        <TextContent>Origin</TextContent>
        <TextContent>{character.origin}</TextContent>
      </Row>
      <Row>
        <TextContent>Location</TextContent>
        <TextContent>{character.location}</TextContent>
      </Row>
    </TouchableCard>
  )
}

const { number, string, func, shape } = PropTypes

CharacterCard.propTypes = {
  character: shape({
    id: number,
    name: string,
    status: string,
    species: string,
    origin: string,
    location: string,
    image: string,
  }).isRequired,
  onPress: func,
}

CharacterCard.defaultProps = {
  onPress: () => null,
}

export default CharacterCard
