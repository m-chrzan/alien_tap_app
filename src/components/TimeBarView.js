import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import styles from '../styles/styles'

export const TimeBarView = ({timeLeft}) => {
  let { width } = Dimensions.get('window')
  let barWidth = Math.round((timeLeft / 600) * width)
  let color = 'green'
  if (timeLeft <= 150) {
    color = 'red'
  } else if (timeLeft <= 300) {
    color = 'orange'
  }

  return (
    <View style={ [styles.timeBar, { width: barWidth, backgroundColor: color }] }></View>
  )
}

