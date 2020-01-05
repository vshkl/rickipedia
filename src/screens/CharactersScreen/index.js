import React from 'react'
import { View } from 'react-native'

import CharacterCard from '../../components/CharacterCard'
import List from '../../components/List'

import api from '../../models/Episodes/api'

api.getAll(1)
  .then(console.log)

const CharactersScreen = () => {
  return (
    <View>
      <List
        data={[]}
        renderItem={({ item }) => (
          <CharacterCard
            character={{
              id: item.id,
              name: item.name,
              status:	item.status,
              species: item.species,
              origin: item.origin,
              location: item.location,
            }}
          />
        )}
      />
    </View>
  )
}

export default CharactersScreen
