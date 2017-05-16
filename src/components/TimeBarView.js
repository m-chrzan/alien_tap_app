import React from 'react'
import { View, Text, Dimensions } from 'react-native'
export const TimeBarView = ({timeLeft}) => {
  let { width } = Dimensions.get('window')
  let barWidth = Math.round((timeLeft / 100) * width)
  return (
    <View style={{ width: barWidth }}></View>
  )
}

