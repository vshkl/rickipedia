import React from 'react'
import { View } from 'react-native'

import EpisodeCard from '../../components/EpisodeCard'
import List from '../../components/List'

const EpisodesScreen = () => {
  return (
    <View>
      <List
        data={[]}
        renderItem={({ item }) => (
          <EpisodeCard
            episode={{
              id: item.id,
              name: item.name,
              airDate: item.airDate,
              season: item.season,
              episode: item.episode,
            }}
          />
        )}
      />
    </View>
  )
}

export default EpisodesScreen
