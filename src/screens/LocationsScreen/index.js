import React from 'react'
import { View } from 'react-native'

import LocationCard from '../../components/LocationCard'
import List from '../../components/List'

const LocationsScreen = () => {
  return (
    <View>
      <List
        data={[]}
        renderItem={({ item }) => (
          <LocationCard
            location={{
              id: item.id,
              name: item.name,
              type:	item.type,
              dimension: item.dimension,
            }}
          />
        )}
      />
    </View>
  )
}

export default LocationsScreen
