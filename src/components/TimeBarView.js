import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styles from '../styles/styles'

export const TimeBarView = ({timeLeft}) => {
  let { width } = Dimensions.get('window')
  let barWidth = Math.round((timeLeft / 600) * width)

  return (
    <View style={ [styles.timeBar, { width: barWidth }] }></View>
  )
}

