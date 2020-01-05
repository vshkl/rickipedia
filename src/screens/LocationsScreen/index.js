import React from 'react'
import { Text, View } from 'react-native'

import LocationCard from '../../components/LocationCard'

const LocationsScreen = () => {
  return (
    <View>
      <Text>
        LocationsScreen
      </Text>
      <LocationCard
        location={{
          id: 1,
          name: 'Earth (C-137)',
          type: 'Planet',
          dimension:' Dimension C-137',
        }}
      />
    </View>
  )
}

export default LocationsScreen
