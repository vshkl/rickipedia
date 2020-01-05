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
        <TextContent>{character.status === 'unknown' ? 'N/A' : character.status}</TextContent>
      </Row>
      <Row>
        <TextContent>Species</TextContent>
        <TextContent>{character.species === 'unknown' ? 'N/A' : character.species}</TextContent>
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
    image: string,
  }).isRequired,
  onPress: func,
}

CharacterCard.defaultProps = {
  onPress: () => null,
}

export default CharacterCard
