import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import EpisodeCard from '../../components/EpisodeCard'
import List from '../../components/List'
import episodesActions from '../../models/Episodes/actions'
import episodesSelectors from '../../models/Episodes/selectors'

const EpisodesScreen = ({ episodes, loadingState, loadEpisodes, refreshEpisodes }) => {
  useEffect(() => {
    loadEpisodes()
  }, [])

  return (
    <View>
      <List
        data={episodes}
        loading={loadingState === 'loading'}
        refreshing={loadingState === 'refreshing'}
        renderItem={({ item }) => <EpisodeCard episode={item}/>}
        onEndReached={loadEpisodes}
        onRefresh={refreshEpisodes}
      />
    </View>
  )
}

const mapStateToProps = createStructuredSelector({
  episodes: episodesSelectors.episodes,
  loadingState: episodesSelectors.loadingState,
})

const mapDispatchToProps = {
  loadEpisodes: episodesActions.load.init,
  refreshEpisodes: episodesActions.refresh.init,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EpisodesScreen)
