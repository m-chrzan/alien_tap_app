import React from 'react'
import { View } from 'react-native'
import { Planet } from '../containers/Planet'

export const GameFieldView = ({planets}) => {
  return (
    <View style={[{display: 'flex'}]}>
      {
        planets.map((planet, id) => {
          return (
            <Planet key={id} id={id}></Planet>
          )
        })
      }
    </View>
  )
}

