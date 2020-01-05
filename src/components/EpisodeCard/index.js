import React from 'react'
import PropTypes from 'prop-types'

import { Row, TextContent, TextTitle, TouchableCard, WrapTitle } from './styled'

const EpisodeCard = ({ episode, onPress }) => {
  const formatNumber = (number) =>
    number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false })

  return (
    <TouchableCard onPress={() => onPress(episode.id)}>
      <WrapTitle>
        <TextTitle>{episode.name}</TextTitle>
      </WrapTitle>
      <Row>
        <TextContent>Episode</TextContent>
        <TextContent>{`s${formatNumber(episode.season)}e${formatNumber(episode.episode)}`}</TextContent>
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
