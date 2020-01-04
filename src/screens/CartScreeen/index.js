import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Searchbar } from 'react-native-paper'

const CartScreen = () => {
  const [query, setQuery] = useState('')

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="What would you like to buy?"
        onChangeText={query => setQuery(query)}
        value={query}
      />
    </SafeAreaView>
  )
}

export default CartScreen
