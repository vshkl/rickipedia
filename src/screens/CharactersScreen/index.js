import React from 'react'
import { Text, View } from 'react-native'

import CharacterCard from '../../components/CharacterCard'

const CharactersScreen = () => {
  return (
    <View>
      <Text>
        CharactersScreen
      </Text>
      <CharacterCard
        character={{
          id: 1,
          name: 'Rick Sanchez',
          status:	'Alive',
          species: 'Human',
          origin: 'Earth (C-137)',
          location: 'Earth (Replacement Dimension)',
        }}
      />
    </View>
  )
}

export default CharactersScreen
