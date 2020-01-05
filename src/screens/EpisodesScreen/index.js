import React from 'react'
import { Text, View } from 'react-native'

import EpisodeCard from '../../components/EpisodeCard'

const EpisodesScreen = () => {
  return (
    <View>
      <Text>
        EpisodesScreen
      </Text>
      <EpisodeCard episode={{
        id: 1,
        name: "Pilot",
        airDate: "December 2, 2013",
        season: 1,
        episode: 1,
      }}/>
    </View>
  )
}

export default EpisodesScreen
