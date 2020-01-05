import React from 'react'
import { enableScreens } from 'react-native-screens'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CharactersScreen from '../screens/CharactersScreen'
import EpisodesScreen from '../screens/EpisodesScreen'
import LocationsScreen from '../screens/LocationsScreen'

enableScreens()

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const CharactersStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Characters" component={CharactersScreen} />
  </Stack.Navigator>
)

const EpisodesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Episodes" component={EpisodesScreen} />
  </Stack.Navigator>
)

const LocationsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Locations" component={LocationsScreen} />
  </Stack.Navigator>
)

const MainNavigator = () => (
  <NavigationNativeContainer>
    <Tab.Navigator>
      <Tab.Screen name="Episodes" component={EpisodesStack} />
      <Tab.Screen name="Characters" component={CharactersStack} />
      <Tab.Screen name="Locations" component={LocationsStack} />
    </Tab.Navigator>
  </NavigationNativeContainer>
)

export {
  MainNavigator,
}
