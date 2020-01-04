/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native'

import { Cart } from './src/models'

class App extends React.PureComponent {
  componentDidMount() {
    const cart = Cart.create({ products: [] })

    cart.addProduct('apple')
    cart.addProduct('sour cream')

    console.log(cart)
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          <View/>
        </SafeAreaView>
      </>
    );
  }
}

export default App
