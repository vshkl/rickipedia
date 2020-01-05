import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import LocationCard from 'src/components/LocationCard'
import List from 'src/components/List'
import locationsActions from 'src/models/Locations/actions'
import locationsSelectors from 'src/models/Locations/selectors'

const LocationsScreen = ({ locations, loadingState, loadLocations, refreshLocations }) => {
  useEffect(() => {
    loadLocations()
  }, [])

  return (
    <View>
      <List
        data={locations}
        loading={loadingState === 'loading'}
        refreshing={loadingState === 'refreshing'}
        renderItem={({ item }) => <LocationCard location={item}/>}
        onEndReached={loadLocations}
        onRefresh={refreshLocations}
      />
    </View>
  )
}

const mapStateToProps = createStructuredSelector({
  locations: locationsSelectors.locations,
  loadingState: locationsSelectors.loadingState,
})

const mapDispatchToProps = {
  loadLocations: locationsActions.load.init,
  refreshLocations: locationsActions.refresh.init,
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsScreen)
