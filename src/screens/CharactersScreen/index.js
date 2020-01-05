import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CharacterCard from 'src/components/CharacterCard'
import List from 'src/components/List'
import charactersActions from 'src/models/Characters/actions'
import charactersSelectors from 'src/models/Characters/selectors'

const CharactersScreen = ({ characters, loadingState, loadCharacters, refreshCharacters }) => {
  useEffect(() => {
    loadCharacters()
  }, [])

  return (
    <View>
      <List
        data={characters}
        loading={loadingState === 'loading'}
        refreshing={loadingState === 'refreshing'}
        renderItem={({ item }) => <CharacterCard character={item}/>}
        onEndReached={loadCharacters}
        onRefresh={refreshCharacters}
      />
    </View>
  )
}

const mapStateToProps = createStructuredSelector({
  characters: charactersSelectors.characters,
  loadingState: charactersSelectors.loadingState,
})

const mapDispatchToProps = {
  loadCharacters: charactersActions.load.init,
  refreshCharacters: charactersActions.refresh.init,
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersScreen)
