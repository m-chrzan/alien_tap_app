import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

const dudeImage = require('../../img/dude.png')
const alienImage = require('../../img/alien.png')

export const PlanetView = ({id, isEmpty, isDude, leftOffset}) => {
  return (
    <View style={styles.circle}>
      <Image
        style={styles.image}
        source={isEmpty ? null : (isDude ? dudeImage : alienImage)}>
      </Image>
    </View>
  )
}
