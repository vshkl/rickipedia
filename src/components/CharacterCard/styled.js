import { Text, TouchableOpacity, View } from 'react-native'
import glamorous from 'glamorous-native'

const TouchableCard = glamorous(TouchableOpacity)({
  paddingHorizontal: 16,
  paddingVertical: 8,
  backgroundColor: '#FFFFFF',
})

const Row = glamorous(View)({
  flexDirection: 'row',
  justifyContent: 'space-between',
})

const TextTitle = glamorous(Text)({
  fontSize: 20,
})

const TextContent = glamorous(Text)({
  fontSize: 12,
})

const WrapTitle = glamorous(View)({
  paddingBottom: 8,
})

export {
  Row,
  TextContent,
  TextTitle,
  TouchableCard,
  WrapTitle,
}
