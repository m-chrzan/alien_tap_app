import React from 'react'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from '../styles/styles'

const dudeImage = require('../../img/dude.png')
const alienImage = require('../../img/alien.png')

export const PlanetView = ({id, isEmpty, isDude, leftOffset, onKill}) => {
  return (
    <TouchableOpacity
      style={[styles.planet, {marginLeft: leftOffset}]}
      onPress={onKill}
      disabled={isEmpty}>
      <View style={styles.circle}>
        <Image
          style={styles.image}
          source={isEmpty ? null : (isDude ? dudeImage : alienImage)} />
      </View>
    </TouchableOpacity>
  )
}
