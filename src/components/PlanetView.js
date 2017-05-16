import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const dudeImage = require('../../img/dude.png')
const alienImage = require('../../img/alien.png')

export const PlanetView = ({id, isEmpty, isDude, leftOffset, onKill}) => {
  return (
    <TouchableOpacity
      onPress={onKill}
      disabled={isEmpty}>
        <View>
          <Image
            source={isEmpty ? null : (isDude ? dudeImage : alienImage)}>
          </Image>
        </View>
    </TouchableOpacity>
  )
}
