import React from 'react'
import { View, Text } from 'react-native'
export const GameStatsView = ({aliensKilled, dudesKilled}) => {
  return (
    <View>
      <Text>Aliens killed: {aliensKilled}</Text>
      <Text>Dudes killed: {dudesKilled}</Text>
    </View>
  )
}

