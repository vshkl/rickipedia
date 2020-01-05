import React from 'react'
import PropTypes from 'prop-types'

import { Row, TextContent, TextTitle, TouchableCard, WrapTitle } from './styled'

const EpisodeCard = ({ episode, onPress }) => {
  return (
    <TouchableCard onPress={() => onPress(episode.id)}>
      <WrapTitle>
        <TextTitle>{episode.name}</TextTitle>
      </WrapTitle>
      <Row>
        <TextContent>Season</TextContent>
        <TextContent>{episode.season}</TextContent>
      </Row>
      <Row>
        <TextContent>Episode</TextContent>
        <TextContent>{episode.episode}</TextContent>
      </Row>
      <Row>
        <TextContent>Air date</TextContent>
        <TextContent>{episode.airDate}</TextContent>
      </Row>
    </TouchableCard>
  )
}

const { number, string, func, shape } = PropTypes

EpisodeCard.propTypes = {
  episode: shape({
    id: number,
    name: string,
    airDate: string,
    season: number,
    episode: number,
  }).isRequired,
  onPress: func,
}

EpisodeCard.defaultProps = {
  onPress: () => null,
}

export default EpisodeCard
